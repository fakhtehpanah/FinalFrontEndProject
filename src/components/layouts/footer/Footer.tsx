import { ImageView } from "@/components/common";
import Logo from "/public/Logo.svg";
import Address from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-marker.svg";
import Headset from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-headset 1.svg";
import Email from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-paper-plane.svg";
import Time from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/fi-rs-time-fast.svg";
import AppStore from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/va724oeh 1.svg";
import GooglePlay from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/17kw6njp 1.svg";
import Payment from "/Users/fakhtehpanah/Desktop/Programming projects/shop next/my-app/public/payment-method 1.svg";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-pink-100 py-20">
      <div className="flex p-6 lg:border-b">
        <div className=" lg:border-none lg:grid grid-cols-2 ">
          <div className="font-thin border-b lg:border-none">
          <ImageView src={Logo} alt="logo" />
          <p className="py-3">Pellentesque posuere orci lobortis</p>
            <div className="flex p-2 gap-2">
              <ImageView src={Address} alt="" />
              <p>
                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                States
              </p>
            </div>
            <div className="flex p-2 gap-2">
              <ImageView src={Headset} alt="" />
              <p>Call Us: (+91)-540-025-124553</p>
            </div>
            <div className="flex p-2 gap-2">
              <ImageView src={Email} alt="" />
              <p>Email: contact@nestmart.com</p>
            </div>
            <div className="flex p-2 gap-2">
              <ImageView src={Time} alt="" />
              <p>Hours: 10:00 - 18:00, Mon - Sat</p>
            </div>
          </div>
          <div className="flex flex-col lg:grid grid-cols-3">
            <div className="border-b lg:border-none py-2">
              <span>Company</span>
              <ul>
                <li className="font-thin">About Us</li>
                <li className="font-thin">Delivery Information</li>
                <li className="font-thin">Privacy Policy</li>
                <li className="font-thin">Terms & Conditions</li>
                <li className="font-thin">Contact Us</li>
                <li className="font-thin">Support Center</li>
                <li className="font-thin">Careers</li>
              </ul>
            </div>
            <div className="border-b lg:border-none py-2">
              <span>Information</span>
              <ul>
                <li className="font-thin">Search Terms</li>
                <li className="font-thin">Advanced Search</li>
                <li className="font-thin">Help & FAQ`s</li>
                <li className="font-thin">Store Location</li>
                <li className="font-thin">Order & Returns</li>
                <li className="font-thin">Feedback for us</li>
              </ul>
            </div>
            <div className="border-b lg:border-none py-2">
              <span>App & Payment</span>
              <p className="py-2 font-thin">Install NetMart App from App Store or Google Play</p>
              <div className="flex justify-between mx-10 py-3 lg:justify-center">
                <ImageView src={AppStore} alt=""/>
                <ImageView src={GooglePlay} alt=""/>
              </div>
              <p className="py-2 font-thin ">Secured Payment Gateways</p>
              <div className="py-3">
                <ImageView src={Payment}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-3">
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
