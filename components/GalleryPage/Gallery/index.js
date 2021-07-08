import Gallery from './Gallery';
import {graphql} from 'react-apollo'
import gql from 'graphql-tag'

function makeUnsplashSrc (url) {
	return `${url}?dpr=2&auto=format&w=1024&h=1024`;
	// return `${url}?dpr=2&auto=format&w=1024&h=1024`;
}
function makeUnsplashSrcSet (url, size) {
	return `${url}?dpr=2&auto=format&w=${size} ${size}w`;
	// return `${url}?dpr=2&auto=format&w=${size} ${size}w`;
}
function makeUnsplashThumbnail (url, orientation = 'landscape') {
	const dimensions = orientation === 'square'
		? 'w=300&h=300'
		: 'w=240&h=159';

	return `${url}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
	// return `${url}?dpr=2&auto=format&crop=faces&fit=crop&${dimensions}`;
}

const GalleryIndex = props => {
	// console.log('props');
	// console.log(props);
	const { loading, galleryOne, error } = props.data;
	if (loading) {
		return (<div>Loading...</div>)
	}
	if (error) {
		return (<div>There was an issue while fetching Images</div>)
	}
	// console.log(makesquareIndex);

	return (
		<Gallery images={galleryOne.images.map(({ url }, index) => {

			return ({
				src: makeUnsplashSrc(url),
				thumbnail: makeUnsplashThumbnail(url, ((index)%5==0? 'square': 'landscape')),
				srcSet: [
					makeUnsplashSrcSet(url, 1024),
					makeUnsplashSrcSet(url, 800),
					makeUnsplashSrcSet(url, 500),
					makeUnsplashSrcSet(url, 320),
				],
				caption: 'Photo by KTT Media 2019',
				orientation: ((index)%5==0? 'square': 'landscape'),
				useForDemo: true,
			})
		})}
		theme = {{container: {zIndex: 99999}}}
		showThumbnails />
	)
}

const gqlWrapper = gql `
query rootQuery{
	galleryOne(filter: {name: "KTT Gallery"}) {
    images{
      url
    }
  }
}
`
export default graphql(gqlWrapper, {
  props: ({ data }) => ({
    data
  })
})(GalleryIndex)
