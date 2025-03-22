import Head from 'next/head'
/*
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
*/

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Modul 01 - Lab 2.2 | Senior Project 2025</title>
                <meta name="description" content="Template untuk Lab 2.2. Github Actions. Based on create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div>
                    <p>
                        Lakukan perubahan pada&nbsp;
                        <code>src/pages/index.js</code>
                    </p>
                </div>

                <div>
                    <h1>
                        Senior Project 2023 | Lab Informatika
                    </h1>
                </div>

                <div>
                    <h5>
                        [Aisa Selvira Quraata A'yunni] | [498561]
                    </h5>
                </div>
            </main>
        </>
    )
}
