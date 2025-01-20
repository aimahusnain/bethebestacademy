import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-lg text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo.jpeg"
            alt="Company Logo"
            width={120}
            height={40}
            className="mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Coming Soon</h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-md mx-auto">
          We&apos;re crafting something extraordinary. Stay tuned for our grand reveal.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Facebook className="w-6 h-6" />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Twitter className="w-6 h-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  )
}

