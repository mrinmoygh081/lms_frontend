import { Global } from "@emotion/react";

const GlobalCss = () => {
  return (
    <Global
      styles={`
        /* General Reset */
        html, body, p, span {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Links */
        a {
          text-decoration: none;
          color: inherit;
          transition: all 0.4s ease-in-out;
        }

        /* Buttons */
        button, 
        button:hover, 
        input[type="submit"], 
        input[type="submit"]:hover {
          transition: all 0.4s ease-in-out;
        }

        /* Scrollbar */
        html::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        html::-webkit-scrollbar-track {
          background: #e5e5e5;
        }
        html::-webkit-scrollbar-thumb {
          background: #d1d1d1;
          border-radius: 50px;
        }

        /* Button Styles */
        .primary_main_btn {
          /* Add styles here */
        }
        .primary_main_btn:hover {
          /* Add hover styles here */
        }
        .secondary_main_btn {
          /* Add styles here */
        }
        .secondary_main_btn:hover {
          /* Add hover styles here */
        }
        .fallback_wrapper{
          display: flex;
          justifyContent: center;
          alignItems: center;
          background: white;
          height: 100vh;
        }
        .bottom-menu {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #ffffff;
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
          display: none;
          justify-content: space-around;
          padding: 10px 0;
        }
        .menu-item {
          text-align: center;
          color: #555;
          text-decoration: none;
          font-size: 14px;
          flex: 1;
        }
        .menu-item svg {
          display: block;
          margin: 0 auto 5px;
          width: 24px;
          height: 24px;
          fill: #555;
          transition: fill 0.2s;
        }
        .menu-item:hover svg,
        .menu-item:focus svg {
          fill: #f16126;
        }
        .menu-item:hover,
        .menu-item:focus {
          color: #f16126;
        }
        .header-wrapper .logo{
          width: 75px;
        }

        /* Media Queries */
        @media only screen and (max-width: 1023px) {
           .bottom-menu {
              display: flex;
            }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          /* Add specific styles here */
        }

        @media (min-width: 980px) and (max-width: 1023px) {
          /* Add specific styles here */
        }
      `}
    />
  );
};

export default GlobalCss;
