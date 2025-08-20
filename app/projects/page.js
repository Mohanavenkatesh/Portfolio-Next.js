import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const page = ({ children }) => {
  return (
    <>

      <div className='mx-6 flex flex-col items-start'>
        <h1 className='text-2xl font-semibold mb-4'>My Projects</h1>
        <p className='mb-6'>
          A few projects highlighting my frontend skills and modern web tech.
        </p>
        <div>
          {/* <div className='flex flex-col mb-4'>
            <h2 className='font-semibold mb-1'>1. Bite (Bitetoothpastebits.com Clone)</h2>
            <p className='mb-1'>
              Bite is a clone of the <a href="https://bitetoothpastebits.com/" target="_blank" rel="noopener noreferrer">bitetoothpastebits.com</a> website. This project replicates the design and core functionality of the original site using HTML, CSS, and JavaScript, focusing on responsive layouts, clean UI, and smooth user experience.
            </p>
            <a
              href='https://mohanavenkatesh.github.io/Bite/'
              target='_blank'
              rel="noopener noreferrer"
            >
              <Button variant="outline">View</Button>
            </a>

          </div>
          <div className='flex flex-col mb-4'>
            <h2 className='font-semibold mb-1'>2. Spotify Premium Clone</h2>
            <p className='mb-1'>
              I cloned the Spotify Premium site as a beginner project using only HTML and CSS. This project helped me practice layout and styling by recreating the look and feel of the original Spotify Premium landing page. You can view the live project at the link below.
            </p>
            <a
              href='https://spotify-project-clone.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button variant="outline">View</Button>
            </a>
          </div> */}
        </div>
      </div>

      <Carousel className='mx-6'>
        <CarouselContent>

          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>1. Bite (Bitetoothpastebits.com Clone)</CardTitle>
                <CardDescription></CardDescription>

              </CardHeader>
              <CardContent>
                Bite is a clone of the bitetoothpastebits.com website. This project replicates the design and core functionality of the original site using HTML, CSS, and JavaScript, focusing on responsive layouts, clean UI, and smooth user experience.             </CardContent>
              <CardFooter>
                <a
                  href='https://mohanavenkatesh.github.io/Bite/'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  <Button variant="outline">View</Button>
                </a>
              </CardFooter>
            </Card>
          </CarouselItem>

          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>2. Spotify Premium Clone</CardTitle>
                <CardDescription></CardDescription>

              </CardHeader>
              <CardContent>
                <p>I cloned the Spotify Premium site as a beginner project using only HTML and CSS. This project helped me practice layout and styling by recreating the look and feel of the original Spotify Premium landing page. You can view the live project at the link below.</p>
              </CardContent>
              <CardFooter>
                <a
                  href='https://spotify-project-clone.netlify.app/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant="outline">View</Button>
                </a>
              </CardFooter>
            </Card>
          </CarouselItem>

        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

    </>
  )
}

export default page