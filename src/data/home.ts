export interface HomeSlide {
  id: string;
  title: string;
  verticalTextLeft: string;
  verticalTextRight: string;
  bgColorFrom: string;
  bgColorTo: string;
}

export const HOME_SLIDES: HomeSlide[] = [
  {
    id: "slide-1",
    title: "The Best Burger in Town",
    verticalTextLeft: "YAMMY",
    verticalTextRight: "BURGER",
    bgColorFrom: "#FF2020",
    bgColorTo: "#7A0A1A",
  },
  {
    id: "slide-2",
    title: "Fresh Ingredients Always",
    verticalTextLeft: "YAMMY",
    verticalTextRight: "BURGER",
    bgColorFrom: "#3DAF72",
    bgColorTo: "#1A6B3A",
  },
];

export const SLIDE_LOCATION_DATA = {
  title: "Come Hunger",
  subtitle: "Find Us",
  address: {
    line1: "42 Av. Habib Bourguiba",
    line2: "Tunis 1000, Tunisia",
  },
  contact: {
    phone: "+216 71 123 456",
    instagram: "@dafesburger",
  },
  hours: [
    { days: "Mon – Thu", time: "11:00 – 23:00" },
    { days: "Friday", time: "11:00 – 01:00" },
    { days: "Saturday", time: "11:00 – 01:00" },
    { days: "Sunday", time: "11:00 – 23:00" },
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.4!2d10.1815!3d36.8065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd337f5e7ef543%3A0xd671924e714a0275!2sAv.+Habib+Bourguiba%2C+Tunis!5e0!3m2!1sen!2stn!4v1",
  directionsUrl: "https://maps.google.com/?q=42+Av+Habib+Bourguiba+Tunis",
};
