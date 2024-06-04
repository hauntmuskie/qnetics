const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Qnetics. All rights reserved.
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            {/* Social media icons */}
            <a href="/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              {/* Replace with your Facebook icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.816 1.006l-4.61 5.89v8.918H5.884V7.89l-4.61-5.89h16.945z" />
              </svg>
            </a>
            <a href="/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              {/* Replace with your Twitter icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.955 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-.775-10.67-.966 2.67-.2 5.568-.83 7.74-1.736 2.17-1.875 3.44-4.09 3.44-6.812 0-5.516-4.09-10.014-9.552-10.014-5.267 0-9.225 4.181-9.225 9.445 0 9.395 7.781 17.18 16.076 23.666-.71 4.365-2.596 8.168-5.368 11.248-2.263-3.105-6.101-5.32-10.578-5.32-4.552 0-8.578 2.39-10.892 6.588-2.315-4.197-6.338-6.588-10.892-6.588-4.48 0-8.51 2.208-10.728 6.042-2.218-3.834-6.155-6.042-10.728-6.042-4.329 0-8.185 2.16-10.777 5.87-2.592-3.71-6.445-5.87-10.777-5.87-4.419 0-8.304 2.208-10.666 6.042-2.362-3.834-6.299-6.042-10.666-6.042C.744 12.17 0 13.41 0 14.702c0 4.418 3.582 8 8.037 8 4.456 0 8.037-3.582 8.037-8 0-1.292-.744-2.532-1.888-3.44zm-1.89 1.408c-.826.89-2.133 1.842-3.768 2.117v4.912c1.548-.275 2.855-1.227 3.768-2.117h4.912c.826.89 2.133 1.842 3.768 2.117v4.912c-1.548-.275-2.855-1.227-3.768-2.117H1.064z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;