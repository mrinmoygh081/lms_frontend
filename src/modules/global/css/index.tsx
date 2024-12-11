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

        /* Media Queries */
        @media only screen and (max-width: 1023px) {
          .nav_search_box_res {
            display: flex;
            align-items: center;
          }
          .nav_search_box_large {
            display: none;
          }
          .navbar_icon_wrapper {
            display: flex;
            gap: 10px;
          }
          .main_btn {
            min-width: 85px !important;
          }
          .nav_responsive_wrapper {
            justify-content: flex-end;
          }
          .outlate_container {
            padding: 0px 10px !important;
          }
          .hamburger_menu {
            left: 0;
            width: 100%;
          }
          .home_link,
          .notification_link_text {
            display: none;
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
