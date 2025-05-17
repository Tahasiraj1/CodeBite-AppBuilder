import Link from "next/link"
import Image from "next/image"
import { Mail, Facebook, Twitter, Linkedin, Instagram, ChevronRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0a0c14] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Categories Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">User Interface</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">User Experience</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Digital Media</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Lifestyle</Link></li>
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Overview</Link></li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center">
                  Browse
                  <span className="inline-flex items-center justify-center ml-1 bg-gray-200 text-purple-500 text-xs px-1 rounded">BETA</span>
                </Link>
              </li>
              <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Ecommerce</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Mobile</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Marketing</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Research</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Developers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Events</Link></li>
              <li>
                <Link href="#" className="hover:text-white transition-colors flex items-center">
                  Request Demo
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <span className="text-sm text-gray-400">Flowt © 2023</span>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Manage Cookies</Link>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex space-x-4">
                <Link href="#" aria-label="Email">
                  <Mail className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
              </div>
              <div className="flex space-x-3">
                <Link href="#" aria-label="Download on the App Store">
                  <Image 
                    src="/images/AppStore.png" 
                    alt="Download on the App Store" 
                    width={120} 
                    height={40} 
                    className="h-8 w-auto"
                  />
                </Link>
                <Link href="#" aria-label="Get it on Google Play">
                  <Image 
                    src="/images/PlayStore.png" 
                    alt="Get it on Google Play" 
                    width={120} 
                    height={40} 
                    className="h-8 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
