const { request } = require('graphql-request')

const API_ENDPOINT = 'https://the411ng-backend.herokuapp.com/graphql';
//request(API_ENDPOINT, query).then(data => return(data))

module.exports.getBreakingArticles = () => {
  //TODO sources list to include other news outlets
  const sources = ["5965c0feb134570004e7367e","5965c0feb134570004e7367f","5965c0feb134570004e7367d","5965c0feb134570004e73681", "5965c0feb134570004e73680"]
  const query = `{
    gistMany(limit: 10, sort: PUBLISHEDDATE_DESC, filter: {_operators: {source: {in: ["5965c0feb134570004e7367e","5965c0feb134570004e7367f","5965c0feb134570004e7367d","5965c0feb134570004e73681", "5965c0feb134570004e73680"]}}}) {
      _id
      title
      link
      brief
      publishedDate
    }
  }`
  //Fetching articles from the411ng api
  return request(API_ENDPOINT, query)
}

/*module.exports.getArticles = () => {
  const sources = ["5965c0feb134570004e7367e","5965c0feb134570004e7367f","5965c0feb134570004e7367d","5965c0feb134570004e73681", "5965c0feb134570004e73680"]
  const query = `{
    gistMany(limit: 10, sort: PUBLISHEDDATE_DESC, filter: {_operators: {source: {in: ["5965c0feb134570004e7367e","5965c0feb134570004e7367f","5965c0feb134570004e7367d","5965c0feb134570004e73681", "5965c0feb134570004e73680"]}}}) {
      _id
      title
      link
      brief
      publishedDate
    }
  }`
  //Fetching articles from the411ng api
  return request(API_ENDPOINT, query)
}
*/
