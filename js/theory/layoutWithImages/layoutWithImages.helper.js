/*
We'd like to build a photo gallery with a fixed-width, multiple-row layout.
There are a few constraints to consider when laying out the images in our photo gallery:
1. The order of images must be maintained.​
2. Images must maintain their aspect ratio (+/- 1px) and not be cropped.
3. Images in the same row must have the same height.
4. Rows are variable-height, but must be less than or equal to the maximum row height.
5. Every row except the last must have total width equal to the container width.
In other words, we want to resize images so that they fit into neat fixed-width rows. You may assume that the input images are really high resolution (ie. they don't need to be upscaled).
Implement a layout algorithm satisfying the above constraints.
*/

function normalizeFrames(frames, containerWidth = 800, maxRowHeight = 360) {
	return frames.map(({width, height}) => {
		let widthScale = width > containerWidth ? containerWidth / width : 1;
		let heightScale = height > maxRowHeight ? maxRowHeight / height : 1;

		const scale = widthScale < heightScale ? widthScale : heightScale;

		return {
			width: width * scale,
			height: height * scale
		}
	})
}

function createRows(settings, frames, currentSumWidth = 0, currentMaxHeight = 0, currentRow = [], result = []) {
	const {containerWidth, spacing} = settings;

	if (!frames.length) {
		result.push(currentRow);
		return result;
	}

	if (currentSumWidth === containerWidth) {
		result.push(currentRow);
		currentRow = [];
		currentSumWidth = 0;
		currentMaxHeight = 0;
	}

	const currentFrame = frames.shift();

	if (currentRow.length === 0) {
		return createRows(settings, frames, currentFrame.width, currentFrame.height, [currentFrame], result);
	}

	currentSumWidth += currentFrame.width + spacing;
	currentMaxHeight = Math.max(currentMaxHeight, currentFrame.height);
	currentRow.push(currentFrame);

	const spacingTotal = (currentRow.length - 1) * 10;
	const scaleByWidth = (containerWidth - spacingTotal) / (currentSumWidth - spacingTotal);

	if (currentSumWidth > containerWidth) {
		currentRow = currentRow.map(row => {
			let scaleByHeight = row.height < currentMaxHeight ? currentMaxHeight / row.height : 1;
			let scale = Math.min(scaleByHeight, scaleByWidth);

			return {
				width: Math.round(row.width * scale),
				height: Math.round(currentMaxHeight * scale)
			}
		});

		currentSumWidth = containerWidth;
	}

	return createRows(settings, frames, currentSumWidth, currentMaxHeight, currentRow, result)
}

/**
 * @param {Array<Object>} array of frame objects with height/width properties
 * @param {number} width of the containing element, in pixels
 * @param {number} maximum height of each row of images, in pixels
 * @param {number} spacing between images in a row, in pixels
 * @returns {Array<Array<Object>>} array of rows of resized frames
 */
function layoutFrames(frames, containerWidth, maxRowHeight, spacing) {
	const normalizedFrames = normalizeFrames(frames, containerWidth, maxRowHeight);

	return createRows({containerWidth, maxRowHeight, spacing}, normalizedFrames, 0, 0, [], []);
}

const frames=[
		{height: 360, width: 1000},
{height: 600, width: 400},
{height: 400, width: 600},
{height: 400, width: 600},
{height: 400, width: 300},
{height: 400, width: 300}
]

layoutFrames(frames, 800, 360, 10) /* ? */
