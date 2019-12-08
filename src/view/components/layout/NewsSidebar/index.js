import React from "react";
import "./style.scss";
import { Link, withRouter } from "react-router-dom";
import newsLogo from "../../../../assets/images/newsLogo.png";
import EmailIcon from "../../../../assets/images/Email.png";
import MessengerIcon from "../../../../assets/images/Messenger.png";
import NotificationsIcon from "../../../../assets/images/Notifications.png";
import CategoriesIcon from "../../../../assets/images/Categories.png";
import SettingsIcon from "../../../../assets/images/Settings.png";
import StoreIcon from "../../../../assets/images/Store.png";
import AdvertiseIcon from "../../../../assets/images/Ads.png";
import ShortenerIcon from "../../../../assets/images/Shortener.png";
import LockerIcon from "../../../../assets/images/Locaker.png";
import TmpIcon from "../../../../assets/images/Tmp.png";
import WalletIcon from "../../../../assets/images/Wallet.png";
import DonationIcon from "../../../../assets/images/Donation.png";
import Apple from "../../../../assets/images/Apple.png";
import Android from "../../../../assets/images/Android.png";
import Windows from "../../../../assets/images/Windows.png";

const Categories = [
	{ icon: CategoriesIcon, name: "Categories", route: "/categories" },
	{ icon: StoreIcon, name: "Store", route: "/store" },
	{ icon: AdvertiseIcon, name: "Advertise", route: "/advertise" },
	{ icon: ShortenerIcon, name: "Shortener", route: "/shortener" },
	{ icon: LockerIcon, name: "Locker", route: "/locker" },
	{ icon: TmpIcon, name: "TMP", route: "/tmp" },
	{ icon: DonationIcon, name: "Donation", route: "/donation" },
	{ icon: WalletIcon, name: "Wallet", route: "/wallet" },
	{ icon: SettingsIcon, name: "Settings", route: "/settings" }
];
export default withRouter(props => {
	console.log(props);
	return (
		<>
			<div className="newsSidebar">
				<Link to={props.location.pathname === "/profileimage" ? "/user" : "/profileimage"}>
					<img
						className={props.location.pathname !== "/profileimage" ? "logo" : "userIcon"}
						src={
							props.location.pathname !== "/profileimage"
								? newsLogo
								: "https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg"
						}
						alt="logo"
					/>
				</Link>
				<div className="socialIcons">
					<Link to="email">
						<img src={EmailIcon} alt="" />
					</Link>
					<Link to="notification">
						<img src={NotificationsIcon} alt="" />
					</Link>
					<Link to="messanger">
						<img src={MessengerIcon} alt="" />
					</Link>
				</div>
				<div className="CategoriesContainer">
					{Categories.map(({ icon, name, route }) => (
						<Link to={route} className="CategoriesLink">
							<button>
								<img src={icon} alt="" />
								{name}
							</button>
						</Link>
					))}
				</div>
				<div className="AAW">
					<div>
						<button>
							<img src={Apple} alt="" />
							Apple
						</button>
					</div>
					<div>
						<button>
							<img src={Android} alt="" />
							Android
						</button>
					</div>
					<div>
						<button>
							<img src={Windows} alt="" />
							Windows
						</button>
					</div>
				</div>
			</div>
		</>
	);
});
