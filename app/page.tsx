"use client"


import Link from "next/link"
import { ArrowRight, FileText, Search, Zap,RefreshCw,ShieldCheck,ClipboardCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-screen   items-center">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-center p-5 bg-gray-300">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <FileText className="h-6 w-6" />
            <span className="sr-only">PDF Q&A</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex flex-col min-w-full">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-200   via-indigo-200 via-blue-200 to-blue-300">
          <div className="container px-4 md:px-6  ">
            <div className="w-full flex flex-col items-center space-y-6  text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ask Questions, Get Answers from Your PDFs
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Upload your PDF documents and get instant answers to your questions using advanced natural language processing.
                </p>
              </div>
              <div className="flex flex-row flex-wrap gap-4 ">
                <Button  className="cursor-pointer hover:scale-110 transition-all border  p-5   text-center text-sm font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500">
                  <Link href="/dashboard">Get Started</Link>
                </Button>
                <Button  variant="outline" className="cursor-pointer hover:scale-110 transition-all border  p-5    text-center text-sm font-medium  text-black hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500">
                  <Link href="/dashboard/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-300 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
    Powerful Features
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    
    <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
      <CardHeader>
        <FileText className="h-14 w-14 text-primary mb-4" />
        <CardTitle>PDF Upload</CardTitle>
      </CardHeader>
      <CardContent>
        Easily upload and process your PDF documents.
      </CardContent>
    </Card>

    <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
      <CardHeader>
        <Search className="h-14 w-14 text-primary mb-4" />
        <CardTitle>Intelligent Search</CardTitle>
      </CardHeader>
      <CardContent>
        Ask questions and get accurate answers from your documents.
      </CardContent>
    </Card>

    <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
      <CardHeader>
        <Zap className="h-14 w-14 text-primary mb-4" />
        <CardTitle>Fast Processing</CardTitle>
      </CardHeader>
      <CardContent>
        Get instant results with our advanced NLP technology.
      </CardContent>
    </Card>

    <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
      <CardHeader>
        <ClipboardCheck className="h-14 w-14 text-primary mb-4" />
        <CardTitle>Accurate Summaries</CardTitle>
      </CardHeader>
      <CardContent>
        Get concise summaries of lengthy PDFs for quick insights.
      </CardContent>
    </Card>

    <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
      <CardHeader>
        <ShieldCheck className="h-14 w-14 text-primary mb-4" />
        <CardTitle>Data Privacy</CardTitle>
      </CardHeader>
      <CardContent>
        Your documents are secure with end-to-end encryption.
      </CardContent>
    </Card>

    <Card className="hover:ring-1 hover:ring-gray-600 focus:outline-none focus:ring cursor-pointer hover:scale-110 transition-all">
      <CardHeader>
        <RefreshCw className="h-14 w-14 text-primary mb-4" />
        <CardTitle>Continuous Learning</CardTitle>
      </CardHeader>
      <CardContent>
        Our system improves with every question to enhance accuracy.
      </CardContent>
    </Card>
    
  </div>
</div>

        </section>
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-200   via-indigo-200 via-blue-200 to-blue-300">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Using PDF Q&A Today</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Transform the way you interact with your PDF documents. Sign up now and experience the power of intelligent document Q&A.
                </p>
              </div>
              <Button className="cursor-pointer hover:scale-110 transition-all border  p-5   text-center text-sm font-medium  text-white hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring  active:text-blue-500">
                <Link href="/dashboard" className="flex flex-row gap-4 justify-center items-center"><p> Get Started </p><ArrowRight className="ml-2 h-4 w-4" /> </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full flex justify-center flex-col gap-2 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 PDF Q&A. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}