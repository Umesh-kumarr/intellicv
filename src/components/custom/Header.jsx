import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { useUser } from "@/context/UserContext";
import { useDarkMode } from "@/context/DarkModeContext";
import { Moon, Sun, User, LogOut, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
// import { UserButton, useUser } from "@clerk/clerk-react"

const Header = () => {
    const { user, logout } = useUser();
    const { darkMode, toggleDarkMode, mounted } = useDarkMode();
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const dropdownRef = useRef(null);
    // const {isSignedIn} = true;

    const handleLogout = () => {
        logout();
        setShowProfileDropdown(false);
    };

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        };

        if (showProfileDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showProfileDropdown]);

  return (
    <div className="p-3 px-5 flex justify-between shadow-sm bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <Link to='/'>
          <div className="flex justify-center align-middle items-center gap-3">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.2001 32C45.8275 32 51.2001 26.6274 51.2001 20C51.2001 13.3726 45.8275 8 39.2001 8C32.9802 8 27.8656 12.7321 27.2601 18.7925C24.8084 17.6836 22.1597 17.0209 19.4473 16.8465C20.9595 7.29911 29.2274 0 39.2001 0C50.2458 0 59.2001 8.95431 59.2001 20C59.2001 30.6428 50.887 39.344 40.4 39.9646V40H27.2195V38.2545C27.2195 35.987 26.2844 33.7821 24.5705 32.1336C22.8517 30.4804 20.4908 29.5273 18 29.5273C15.5092 29.5273 13.1483 30.4804 11.4295 32.1336C9.71564 33.7821 8.78049 35.987 8.78049 38.2545V40H0V38.2118C0 33.5371 1.94004 29.0906 5.33341 25.8398C8.61822 22.693 13.0047 20.9102 17.5711 20.805C17.7139 20.8017 17.8569 20.8 18 20.8C18.1108 20.8 18.2215 20.801 18.3322 20.803C22.9333 20.8851 27.3586 22.6707 30.6666 25.8398C32.4991 27.5953 33.9078 29.6995 34.8159 32H39.2001Z" fill="#9F5BFF"></path>
<path d="M21.677 34.9245C22.6521 35.7725 23.2 36.9227 23.2 38.122V40H12.8V38.122C12.8 36.9227 13.3479 35.7725 14.323 34.9245C15.2982 34.0764 16.6209 33.6 18 33.6C19.3791 33.6 20.7018 34.0764 21.677 34.9245Z" fill="#9F5BFF"></path>
<path d="M43.7818 18.0363C42.3358 18.0363 41.1637 16.8642 41.1637 15.4182V14.7636C41.1637 13.6792 40.2845 12.8 39.2 12.8C38.1155 12.8 37.2364 13.6791 37.2364 14.7636V15.4182C37.2364 16.8642 36.0642 18.0363 34.6182 18.0363H33.9636C32.8792 18.0363 32 18.9155 32 20C32 21.0845 32.8792 21.9636 33.9636 21.9636H34.6182C36.0642 21.9636 37.2364 23.1358 37.2364 24.5818V25.2364C37.2364 26.3209 38.1155 27.2 39.2 27.2C40.2845 27.2 41.1637 26.3209 41.1637 25.2364V24.5818C41.1637 23.1358 42.3358 21.9636 43.7818 21.9636H44.4364C45.5209 21.9636 46.4 21.0845 46.4 20C46.4 18.9155 45.5209 18.0363 44.4364 18.0363H43.7818Z" fill="#9F5BFF"></path>
<path d="M11.2001 3.20004C11.2001 4.96732 12.6328 6.39999 14.4001 6.39999H15.2C16.5255 6.39999 17.6 7.47451 17.6 8.79999C17.6 10.1255 16.5255 11.2 15.2 11.2H14.4001C12.6328 11.2 11.2001 12.6327 11.2001 14.3999V15.2C11.2001 16.5255 10.1256 17.6 8.80011 17.6C7.47463 17.6 6.40011 16.5255 6.40011 15.2L6.40011 14.4C6.40011 12.6327 4.96742 11.2 3.20011 11.2H2.4C1.07452 11.2 0 10.1255 0 8.79999C0 7.47451 1.07452 6.39999 2.4 6.39999H3.20012C4.96742 6.39999 6.40011 4.96731 6.40011 3.2L6.40011 2.4C6.40011 1.07452 7.47463 0 8.80011 0C10.1256 0 11.2001 1.07452 11.2001 2.4V3.20004Z" fill="#9F5BFF"></path>
</svg>          
          <h1 id="headingTitle" className="text-gray-900 dark:text-white">IntelliCV</h1>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="w-9 h-9"
            aria-label="Toggle dark mode"
            disabled={!mounted}
          >
            {mounted && darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          {user ? (
            <div className="flex gap-4 items-center">
                <Link to={'/dashboard'}><Button variant={'outline'}>Dashboard</Button></Link>
                
                {/* Profile Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <Button
                        variant="ghost"
                        onClick={toggleProfileDropdown}
                        className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
                            {user.email ? user.email.split('@')[0] : 'Profile'}
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${showProfileDropdown ? 'rotate-180' : ''}`} />
                    </Button>
                    
                    {showProfileDropdown && (
                        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 animate-in fade-in-0 zoom-in-95">
                            <div className="py-2">
                                <div className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700">
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                        {user.email ? user.email.split('@')[0] : 'User'}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1">
                                        {user.email || 'user@example.com'}
                                    </div>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center w-full px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    <LogOut className="h-4 w-4 mr-3" />
                                    Sign out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
          ) : (
            <Link to={'/dashboard'}><Button>Get Started</Button></Link>
          )}
        </div>
    </div>
  )
}

export default Header