import React from "react";
import "./style.scss";
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
	{ icon: CategoriesIcon, name: "Categories" },
	{ icon: StoreIcon, name: "Store" },
	{ icon: AdvertiseIcon, name: "Advertise" },
	{ icon: ShortenerIcon, name: "Shortener" },
	{ icon: LockerIcon, name: "Locker" },
	{ icon: TmpIcon, name: "Tmp" },
	{ icon: DonationIcon, name: "Donation" },
	{ icon: WalletIcon, name: "Wallet" },
	{ icon: SettingsIcon, name: "Settings" }
];
export default () => (
	<div className="newsSidebar">
		<img className="logo" src={newsLogo} alt="logo" />
		<div className="socialIcons">
			<img src={EmailIcon} alt="" />
			<img src={NotificationsIcon} alt="" />
			<img src={MessengerIcon} alt="" />
		</div>
		<div className="CategoriesContainer">
			{Categories.map(({ icon, name }) => (
				<button>
					<img src={icon} alt="" />
					{name}
				</button>
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
);
