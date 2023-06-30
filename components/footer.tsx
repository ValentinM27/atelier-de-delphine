export default function Footer() {
  return (
    <footer className="bg-orange-100 bottom-0">
      <div className="mx-auto text-black w-full max-w-screen-xl p-4 py-6 md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://valentinmarguerie.fr"
            rel="noreferrer"
            target="blank"
            className="hover:underline"
          >
            Valentin Marguerie
          </a>
          . Tous droits réservés.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline">
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className=" text-orange-600 hover:underline">
              Connexion
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
