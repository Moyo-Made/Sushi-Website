// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Header.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";

const Header = () => {
	const [open, setOpen] = useState(false);
	return (
		<section className="header-wrapper">
			<div className="header-container paddings innerWidth">
				<div className="header-logo">
					<h3>
						<span>S</span>ushi
					</h3>
				</div>

				<div className="header-menu flexCenter">
					<span>
						<a href="">Home</a>
					</span>
					<a href="">Menu</a>
					<IoMdArrowDropdown className="d-icon" />
					<a href="">About Us</a>
					<a href="">Services</a>
					<IoMdArrowDropdown className="d-icon" />
					<a href="">Offers</a>
				</div>

				<div className="header-right flexEnd">
					<div className="search-icon">
						<LuSearch />
					</div>

					<div className="cartIcon" onClick={() => setOpen(!open)}>
						<HiOutlineShoppingBag />
						<span>8</span>
					</div>
					<div className="phone-icon">
						<button>
							<LuPhoneCall className="phone" /> Contact
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
