import React from 'react';
import Product from "./Product";
import './Home.css'


function Home(){
    return(
        <div className = "home">
            <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
      <div className="home_row">
          <Product
              id = "12345"
              title = "New Apple iPhone SE (64GB, Black) [Locked] + Cricket Wireless Plan"
              price = {299.96}
              rating = {5}
              image = "https://m.media-amazon.com/images/I/81hCytKTUTL._AC_UL320_.jpg"
          />
          <Product
              id = "12345"
              title = "Slim Minimalist Front Pocket RFID Blocking Leather Wallets "
              price = {12.99}
              rating = {4}
              image = "https://m.media-amazon.com/images/I/81oIi9rFU6L._AC_UL320_.jpg"
          />
          <Product
              id = "12345"
              title = "Bose SoundLink Color Bluetooth Speaker II - Soft Black"
              price = {99.90}
              rating = {5}
              image = "https://m.media-amazon.com/images/I/81d3fB4VeDL._AC_UY218_.jpg"
          />
          <Product
              id = "12345"
              title = "JBL FLIP 5 - Waterproof Portable Bluetooth Speaker - Black (New Model)"
              price = {12.99}
              rating = {4}
              image = "https://m.media-amazon.com/images/I/71Xg3PvaiQL._AC_UY218_.jpg"
          />
      </div>
            <div className="home_row">
                <Product
                    id = "12345"
                    title = "Nonda USB C to USB Adapter(2 Pack),USB-C to USB 3.0 Adapter,USB"
                    price = {7.99}
                    rating = {3}
                    image = "https://m.media-amazon.com/images/I/61rcKIsJ2ML._AC_UY218_.jpg"
                />
                <Product
                    id = "12345"
                    title = "iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holde"
                    price = {24.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/718NVofDrCL._AC_UY218_.jpg"
                />
                <Product
                    id = "12345"
                    title = "Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera"
                    price = {37.98}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/31dz6wCIWML._AC_UY218_.jpg"
                />
                <Product
                    id = "12345"
                    title = "Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera"
                    price = {37.98}
                    rating = {4}
                    image = "https://m.media-amazon.com/images/I/41WzHq0SkRL._AC_UY218_.jpg"
                />
            </div>
            <div className="home_row">
                <Product
                    id = "12345"
                    title = "SECOXGEAR EcoBoulder+ GDI-EXBLD810 Rugged Waterproof Floating"
                    price = {199.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/81QtdeLlTQL._AC_UY218_.jpg"
                />
                <Product
                    id = "12345"
                    title = "Apple AirPods Pro"
                    price = {220.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY218_.jpg"
                />
                <Product
                    id = "12345"
                    title = "SOUL S-Fit Wireless Earbuds - in Ear Headphones, Bluetooth"
                    price = {199.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/619sCvK9OgL._AC_UY218_.jpg"
                />
                <Product
                    id = "12345"
                    title = "Pioneer Rayz Pro Active Noise Cancelling Earphones, Working, Traveling, Gaming. MFI Lightning USB,"
                    price = {199.99}
                    rating = {5}
                    image = "https://m.media-amazon.com/images/I/71Yd0TqXzpL._AC_UL320_.jpg"
                />
                <Product
                    id = "12345"
                    title = "Pendali Wireless Earbuds Bluetooth 5.1, IPX7 Waterproof Earbuds TWS Stereo Headphones with Portable Charging Case"
                    price = {199.99}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/81AZp7FN%2BrL._AC_UL160_SR160,160_.jpg"
                />
            </div>
        </div>
    )
}
export default Home