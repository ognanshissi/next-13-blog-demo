export interface HeadProps {
    title?: string;
    description?: string
}

const  Head = ({title, description }: HeadProps) => {
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
