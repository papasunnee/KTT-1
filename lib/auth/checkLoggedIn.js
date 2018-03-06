import gql from 'graphql-tag'

export default (context, apolloClient) => (
  apolloClient.query({
    query: gql`
      {
        outletViewer {
          outlet {
            name
            description
            phone
            website
            email
            username
          }
        }
      }
    `
  }).then(({ data }) => {
    console.log('asgcdguvihbojsdhvgaio------------------------------------------');
    console.log(data.outletViewer);
    return { loggedInUser: data.outletViewer }
  }).catch(() => {
    // Fail gracefully
    return { loggedInUser: {} }
  })
)
