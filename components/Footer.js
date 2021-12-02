const Footer = () => {
    return (
    <footer aria-labelledby="footer-heading" className="bg-white border-t border-gray-200">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

      <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-center text-sm text-gray-500">
          <p>Health Game</p>
          <p className="ml-3 border-l border-gray-200 pl-3"><a target="_blank" rel="noreferrer" href="https://twitter.com/nick_mandal">@nick_mandal</a></p>
        </div>
        <p className="mt-6 text-sm text-gray-500 text-center sm:mt-0">&copy; 2021 Nick Mandal.</p>
      </div>
    </div>
  </footer>)
}

export default Footer;