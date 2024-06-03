"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Foto from '@/assets/Perfil.png'
import Link from "next/link";
export default function Page() {
    return (
        <div className="p-20 w-full h-full">
        <h1 className="text-5xl font-bold">About</h1>
        <div className="mt-8 flex">
          <div className="flex-none w-48 h-48">
            <Image
              alt="Profile picture"
              className="rounded-full border border-gray-200 shadow-sm"
              height="192"
              src={Foto}
              style={{
                aspectRatio: "192/192",
                objectFit: "cover",
              }}
              width="192"
            />
          </div>
          <div className="ml-8 flex-grow">
            <h2 className="text-3xl font-bold">Lizardo Perez</h2>
            <p className="text-xl text-gray-500"> Full Stack Web Developer</p>
            <div className="mt-4 flex space-x-4">
              <Link className="text-blue-500 hover:underline" href="#">
              lizardoperezjimenez@gmail.com
              </Link>
              <Link className="text-blue-500 hover:underline" href="#">
              https://github.com/Lizardo10
              </Link>
            </div>
            
            <p className="mt-4 text-lg font-semibold">This is what I am doing right now</p>
            <p className="mt-2 text-lg">
         
              Day by day, I study new frameworks and programming languages to apply them in my daily life in web programming, and with that, I set new goals to achieve.
                        </p>
                        <section aria-labelledby="study-section">
                            <hr />
            <h1 className="text-6xl font-bold mb-12" id="study-section">
                Study
            </h1>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    University, Universidad Mariano Gálvez(UMG), Ingeniería en Sistemas,(3 year)( Study only on Saturdays)
                </h2>
                <p className="text-gray-600 mb-4">Currently</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2022]
                </h2>
                <p className="text-gray-600 mb-4">University, Universidad Mariano Gálvez(UMG), Ingeniería en Sistemas,(1 year)( Study only on Saturdays)</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2021]
                </h2>
                <p className="text-gray-600 mb-4">Diversified, Instituto Nacional de Educación Diversificada</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2019]
                </h2>
                <p className="text-gray-600 mb-4">Middle school, Instituto Nacional de Educación Básica de Concepción Las Minas</p>
            </div>
            <div>
                <h2 className="text-3xl font-semibold mb-2">
                    [2016]
                </h2>
                <p className="text-gray-600 mb-4">Elementary School, Escuela Oficial Urbana Mixta Fernanda Velásquez Torres</p>
            </div>
        </section>     
          </div>
       
          <section aria-labelledby="experience-section">
        <h1 className="text-6xl font-bold mb-12" id="experience-section">
          Experience
        </h1>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
          Full stack developer (Remote)  @ <span className="text-blue-600">Alpha Roofing Products</span>
          </h2>
          <p className="text-gray-600 mb-4">January 2024 - April</p>
          <ul className="list-disc pl-5 mb-8">
          <p className="mt-2 text-lg">
                        - Create and Management of APIs with Nestjs
                        <br />
                        - Template layout
                        <br />
                        - Creaate autentication of JWT and node and authorization for access tokens
                        <br />
                        - Implementation of new functionalities
                        <br />
                        - Code documentation.
                        <br />
                        - Integration of GraphQL queries and mutations
                       
                        <br />
                        - Use of GraphQL client libraries like Apollo Client
                       
                        <br />
                        - Fetching data from GraphQL API endpoints
                        <br />
                        - Handling GraphQL errors and loading states
                        <br />
                        - Updating and caching data with GraphQL subscriptions
                        <br />
                        - Layout of new pages with tailwindcss
                        <br />
                        - Create dashboards for the company
                        <br />
                        - Use Nexjs fron the CEO of the page with SSR
                        <br />
                        -Use the MongoDB database
                        <br />
                        - API calls
                    </p>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-2">
          Full stack developer  @ <span className="text-blue-600">Solupos</span>
          </h2>
          <p className="text-gray-600 mb-4">January 2022 - May 2022</p>
          <ul className="list-disc pl-5 mb-8">
          <p className="mt-2 text-lg">
                        - Management of APIs with PHP
                        <br />
                        - Template layout
                        <br />
                        - Software maintenance with HTML and PHP
                        <br />
                        - Implementation of new functionalities
                        <br />
                        - Code documentation.
                        <br />
                        - Integration of new fields for the invoicing of a System.
                        <br />
                        - Layout of new pages with bootstrap
                        <br />
                        - API calls
                    </p>
          </ul>
        </div>
      </section>
        </div>
      </div>
    );
}
