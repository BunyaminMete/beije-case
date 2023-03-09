import "./navbar.css";
import React from "react";

const Navigate = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const dropdownController = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        {/*  */}
        <div id="main-cont">
          <div className="logo">
            <div id="logo">
              <a tabIndex="0" href="/">
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="56.39"
                  height="24"
                  viewBox="0 0 1001 426"
                >
                  <path
                    className="svgpath"
                    d="M191.13 291.98c-19.73 21.7-44.58 32.35-74.97 32.35-11.84 0-24.86-3.16-38.67-9.47-13.81-6.31-24.07-15-30.78-26.04v32.35H.95V0H47.9v141.65c6.71-11.05 16.57-19.73 30.38-25.65 13.81-6.31 26.83-9.47 39.06-9.47 30.78 0 55.64 11.05 74.57 33.14 19.34 22.1 28.8 47.35 28.8 75.36.01 29.61-9.85 55.25-29.58 76.95zM47.11 215.43c0 18.54 5.92 34.33 17.36 47.35 11.83 12.63 27.22 18.94 45.77 18.94 18.54 0 33.93-6.31 45.37-18.94 11.84-13.02 17.76-28.8 17.76-47.35s-5.92-34.33-17.76-47.35c-11.44-13.02-26.83-19.34-45.37-19.34-18.55 0-33.94 6.31-45.77 19.34-11.44 13.03-17.36 28.81-17.36 47.35zm248.56 14.21c.39 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.44 15.39 42.61 15.39 26.44 0 45.38-11.05 56.82-32.75l33.93 22.49c-17.76 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.37-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.23 46.17 27.23 78.91 0 6.31-.4 11.05-.79 14.6h-159.8zm2.36-35.51h110.48c-1.58-29.6-24.86-47.74-54.84-47.74-28.8 0-51.3 18.94-55.64 47.74zM498.06 20.52c12.23-12.63 31.17-12.63 43.4 0 12.23 12.23 12.23 31.17 0 43.4-12.23 12.23-31.17 12.23-43.4 0-12.23-12.23-12.23-31.17 0-43.4zm45.37 300.66h-46.95v-210.7h46.95v210.7zm104.95-210.7v235.56c0 53.27-25.65 79.71-76.55 79.71-7.5 0-14.6-1.18-21.3-3.16v-41.04c3.55 1.18 7.5 1.58 11.83 1.58 28.02 0 38.67-10.66 38.67-42.22V110.48h47.35zm7.5-68.26c0 16.97-14.2 30.77-31.57 30.77-16.97 0-30.78-13.81-30.78-30.77 0-16.97 13.81-31.17 30.78-31.17 17.36 0 31.57 14.2 31.57 31.17zm81.27 187.42c.4 15.78 6.71 28.8 18.94 39.46 12.23 10.26 26.43 15.39 42.61 15.39 26.43 0 45.37-11.05 56.82-32.75l33.93 22.49c-17.75 32.75-52.08 50.9-89.96 50.9-31.17 0-57.61-10.26-78.91-31.17-20.91-20.91-31.57-47.35-31.57-78.52 0-30.38 10.26-56.03 30.38-77.34 20.12-21.31 45.38-31.96 75.76-31.96 31.96 0 57.21 9.87 75.36 29.99 18.15 20.13 27.22 46.17 27.22 78.91 0 6.31-.39 11.05-.79 14.6H737.15zm2.37-35.51H850c-1.58-29.6-24.86-47.74-54.85-47.74-28.8 0-51.29 18.94-55.63 47.74z"
                  />
                  <path
                    className="svgpath2"
                    d="M1000.95 291.38c0 9.05-6.91 15.72-12.84 21.65-5.93 5.93-12.6 10.84-21.65 10.84s-15.08-5.55-21.01-11.48c-5.93-5.93-10-11.96-10-21.01s-.65-19.8 5.28-25.73c5.93-5.93 16.68-9.15 25.73-9.15s17.18 5.84 23.11 11.77 11.38 14.06 11.38 23.11z"
                  />
                </svg>
              </a>
            </div>
            <div className="navbar">
              <span>Ürünler</span>
              <span>Biz Kimiz</span>
              <span>Bağış Kültürü</span>
              <span>Blog</span>
              <a className="nav-cp" href="/custom-packet">
                Kendi Paketini Oluştur!
              </a>
            </div>
          </div>

          {/*  */}
          {/*  */}
          <div className="right-container">
            <div id="right-container">
              <a className="icon" href="market-svg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M2 2h1.306c.246 0 .37 0 .468.045a.5.5 0 0 1 .213.185c.059.092.076.213.111.457L4.571 6m0 0 1.052 7.731c.134.982.2 1.472.435 1.841a2 2 0 0 0 .853.745c.398.183.893.183 1.883.183h8.558c.942 0 1.414 0 1.799-.17a2 2 0 0 0 .841-.696c.239-.346.327-.81.503-1.735l1.324-6.95c.062-.325.093-.488.048-.615a.5.5 0 0 0-.22-.266C21.532 6 21.366 6 21.034 6H4.571ZM10 21a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                    stroke="#343131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>

              <a className="icon" href="user-svg">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M20 21c0-1.396 0-2.093-.172-2.661a4 4 0 0 0-2.667-2.667c-.568-.172-1.265-.172-2.661-.172h-5c-1.396 0-2.093 0-2.661.172a4 4 0 0 0-2.667 2.667C4 18.907 4 19.604 4 21M16.5 7.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"
                    stroke="#343131"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>

              <button
                className="icon"
                onClick={dropdownController}
                id="dropdown"
              >
                {/*Icon Control*/}
                {isOpen ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M3 12h18M3 6h18M3 18h18"
                      stroke="#343131"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M18 6 6 18M6 6l12 12"
                      stroke="#343131"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/*Mobile First*/}
          {!isOpen && (
            <div className="naviNew">
              <div id="newSelection">
                <div className="products-main">
                  <span>
                    Ürünler
                    <div className="productmenu">
                      <svg
                        className="productsInfo"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path
                          d="m9 18 6-6-6-6"
                          stroke="#343131"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </div>

                <div className="AboutUs">
                  <span>
                    Biz Kimiz
                    <div className="productmenu">
                      <svg
                        className="productsInfo"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path
                          d="m9 18 6-6-6-6"
                          stroke="#343131"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </div>

                <div className="donate">
                  <span>
                    Bağış Kültürü
                    <div className="productmenu">
                      <svg
                        className="productsInfo"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path
                          d="m9 18 6-6-6-6"
                          stroke="#343131"
                          strokeW="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </span>
                </div>

                <div>
                  <span>Blog</span>
                </div>
                <div className="selectpackage">
                  <span>Kendi Paketini Oluştur!</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigate;
