import Gallery from './Gallery';

function makeUnsplashSrc (id) {
	return `http://localhost:3000/static/images/gallery/${id}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (id, size) {
	return `http://localhost:3000/static/images/gallery/${id}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (id, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=300&h=300'
		: 'w=240&h=159';

	return `http://localhost:3000/static/images/gallery/${id}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

const THUMBNAIL_IMAGES = [
	{ id: '1.jpg', caption: 'Photo by KTT Media 2019', orientation: 'square', useForDemo: true },
	{ id: '2.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '3.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '4.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '5.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '6.jpg', caption: 'Photo by KTT Media 2019', orientation: 'square', useForDemo: true },
	{ id: '7.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '8.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '9.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '10.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '11.jpg', caption: 'Photo by KTT Media 2019', orientation: 'square', useForDemo: true },
	{ id: '12.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '13.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '14.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
	{ id: '15.jpg', caption: 'Photo by KTT Media 2019', orientation: 'landscape', useForDemo: true },
];

export default props => (
		<Gallery images={THUMBNAIL_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
			src: makeUnsplashSrc(id),
			thumbnail: makeUnsplashThumbnail(id, orientation),
			srcSet: [
				makeUnsplashSrcSet(id, 1024),
				makeUnsplashSrcSet(id, 800),
				makeUnsplashSrcSet(id, 500),
				makeUnsplashSrcSet(id, 320),
			],
			caption,
			orientation,
			useForDemo,
		}))} showThumbnails />
)
