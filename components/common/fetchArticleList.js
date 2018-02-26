export default async (context) => {
  const baseUrl = context.req ? `${context.req.protocol}://${context.req.get('Host')}` : '';

  //Loading articles from the411ng api
  let res = await fetch(`${baseUrl}/fetch-articles`);
  let articles = await res.json();
  return {
    articles
  }
}
