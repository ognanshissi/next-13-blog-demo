import { defaultHead } from "next/head";

const  Head = ({title, description}: {title: string, description: string}) => {
  return (
    <>
      <title>{ title }</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}

Head.defaultProps = {
  title: "Demo blog",
  description: "Demo  blog description"
}

export default Head;