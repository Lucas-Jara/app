import Head from "next/head"

type Props = {
    title?:string;
    children: React.ReactNode
}

export const Layout = ({title,children}:Props) => {
  return (
    <>
    <Head>
        <title>{title || "Diario San Francisco | El diario de solano"}</title>
        <meta name="description" content="Diario San Francisco | El Diario de San Francisco Solano. Noticias de Solano, Quilmes, Almirante Brown, Quilmes oeste, La Florida" />
    </Head>
    <main>
        {children}
    </main>
    </>
  )
}
