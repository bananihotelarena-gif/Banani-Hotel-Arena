import React from "react";

export default function StructuredData() {
  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": "https://bananihotelarena.com/#hotel",
    name: "Banani Hotel Arena",
    alternateName: "Hotel Arena Banani",
    url: "https://bananihotelarena.com",
    logo: "https://bananihotelarena.com/favicon.svg",
    image: [
      "https://bananihotelarena.com/images/Family-Room-scaled-1.webp",
      "https://bananihotelarena.com/images/Couple-Room-scaled-1.webp",
      "https://bananihotelarena.com/images/Single-Room-scaled-1.webp",
    ],
    description:
      "Banani Hotel Arena is a premier residential hotel in Banani, Dhaka, providing clean, comfortable, and relaxing AC rooms with modern amenities for solo travelers, couples, and families.",
    telephone: "+8801352066041",
    email: "info@bananihotelarena.com",
    priceRange: "TK 3,500 - TK 5,500",
    currenciesAccepted: "BDT",
    paymentAccepted: "Cash, Mobile Banking, Cards",
    checkinTime: "12:00",
    checkoutTime: "11:30",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House No- 65/A, Road 27, Block-A",
      addressLocality: "Banani",
      addressRegion: "Dhaka",
      postalCode: "1213",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.7937,
      longitude: 90.4043,
    },
    hasMap: "https://maps.google.com/?q=House+No-+65/A,+Road+27,+Block-A,+Banani,+Dhaka+1213",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Condition",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free High-Speed Wi-Fi",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Hot & Cold Water",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Room Service",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Comfortable Rooms",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Convenient Location on Road 27",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Front Desk Assistance",
        value: true,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Banani Hotel Arena Room Categories",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Standard Single Room Ac (1)",
          description:
            "A cozy and comfortable room designed for single occupancy. The Standard Single Room is an ideal choice for solo travelers, business guests, and visitors looking for a comfortable stay in Banani.",
          price: "3500",
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Standard Single Room Ac (1)",
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: 1,
            },
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 1,
              typeOfBed: "Single Bed",
            },
          },
        },
        {
          "@type": "Offer",
          name: "Standard Couple Room Ac (2)",
          description:
            "Banani Hotel Arena offers comfortable standard AC rooms for single or double occupancy with modern amenities and quality hospitality.",
          price: "4000",
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Standard Couple Room Ac (2)",
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: 2,
            },
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 1,
              typeOfBed: "Double Bed",
            },
          },
        },
        {
          "@type": "Offer",
          name: "Deluxe Couple Room Ac (3)",
          description:
            "Discover enhanced comfort and elegance in our Deluxe AC Room at Banani Hotel Arena, offering premium furnishings and top-tier amenities.",
          price: "4500",
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Deluxe Couple Room Ac (3)",
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: 3,
            },
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 1,
              typeOfBed: "King Bed",
            },
          },
        },
        {
          "@type": "Offer",
          name: "Premium Family Room Ac (4)",
          description:
            "Spacious suite designed for family or group stays at Banani Hotel Arena, accommodating up to 4 guests with modern AC and attentive service.",
          price: "5500",
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
          itemOffered: {
            "@type": "HotelRoom",
            name: "Premium Family Room Ac (4)",
            occupancy: {
              "@type": "QuantitativeValue",
              maxValue: 4,
            },
            bed: {
              "@type": "BedDetails",
              numberOfBeds: 2,
              typeOfBed: "Queen + Single Bed",
            },
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
    />
  );
}
