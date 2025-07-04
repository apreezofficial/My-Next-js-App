export default async function ImageModel(
  {
    params,
  } : {params : Promise<{ image: string }>;}
) {
  const imageSearched = (await params).image;
  return <>
  <p>{imageSearched}</p>
  </>
}
