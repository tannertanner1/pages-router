export const siteName = `Temp Suscip`; // ${siteName}

/* @note importing an image automatically sets width and height */
import img0 from "./public/yan-krukau.png";
import img1 from "./public/temp-suscip.png";
import img2 from "./public/elmer-canas.png";
import img3 from "./public/mikhail-nilov.png";
export const img = [
  { image: img0, alt: `Boy Sitting on Bed with Acoustic Guitar Smiling at a Laptop by Yan Krukau` },
  { image: img1, alt: `Photo of ${siteName}` },
  { image: img2, alt: `Boy Holding Dreadnought Acoustic Guitar Beside Girl During Daytime by Elmer Cañas` },
  { image: img3, alt: `A Kid Drawing Near a Laptop by Mikhail Nilov` },
];

/* @note components/layout */
export const layout = {
  navbar: {
    icon: {
      span: [ `Temp`, `Suscip` ],
    },
    div: [
      { href: `/about`, span: `About` },
      { href: `/calendar`, span: `Calendar` },
      { href: `/policy`, span: `Policy` },
      { href: `/contact`, span: `Contact` },
    ],
    button: {
      href: `/sign-up`,
      span: `Sign-Up`,
    },
  },
  footer: {
    copy: `Temp Suscip`,
    icon: [
      { href: `https://www.youtube.com`, label: `YouTube` },
      { href: `https://www.tiktok.com`, label: `TikTok` },
    ],
  },
};

/** @note pages/index */
export const index = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Home | ${siteName}`,
    description: `Learn more about lessons online or sign-up today!`,
    url: `https://pages-router-eight.vercel.app`,
  },
  section: [
    {
      image: img[0].image,
      alt: img[0].alt,
      h1: {
        span: [ `Learn.`, `Guitar.`, `Online.` ],
      },
      h2: `Neque porro quisquam est qui dolorem ipsum quia dolor sit`,
      button: [
        { href: `/about`, span: `Learn More`, label: `Learn more about Temp Suscip, the studio policy, and online lessons` },
        { href: `/sign-up`, span: `Free Trial` },
      ],
    },
    {
      h1: `Neque lacus at nulla`,
      h2: `Proin venenatis odio augue sed lobortis ex `,
      div: [
        { id: `Turpis`, date: `Mollis`, p: `Donec sit amet vestibulum lectus. Cras tempus non metus et aliquet. Etiam eu diam at libero pharetra sagittis id nec elit. Maecenas pharetra elementum molestie. Ut ut efficitur urna.` },
        { id: `Commodo`, date: `Consectetur`, p: `Phasellus nec magna tempor, maximus augue ac, vestibulum elit. Morbi quis mauris id eros rutrum consequat tempus in sapien. Sed libero leo, dictum vel tempor nec, commodo ut tellus. Mauris magna nibh, consectetur non euismod ac, porta ut orci. Proin sed mauris vitae velit porttitor elementum. ` },
        { id: `Neque`, date: `Malesuada`, p: `Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi.` },
        { id: `Amaximus`, date: `Nunc`, p: `Phasellus facilisis imperdiet mauris, a lobortis nisi bibendum sed. Mauris dictum sapien eget egestas rutrum. Cras id erat vulputate, iaculis massa sit amet, luctus lorem. Sed quis placerat ante, at mattis diam. Cras non molestie lorem.` },
        { id: `Feugiat`, date: `Mollis`, p: `Donec sit amet vestibulum lectus. Cras tempus non metus et aliquet.` },
        { id: `Lectus`, date: `Consectetur`, p: `Phasellus nec magna tempor, maximus augue ac, vestibulum elit. Mauris varius augue sed ante viverra, ut volutpat quam tempor. Aenean suscipit ante eu convallis elementum.` },
        { id: `Porro`, date: `Malesuada`, p: `Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi. Etiam volutpat ex at risus tristique fermentum.` },
        { id: `Augue`, date: `Nunc`, p: `Phasellus facilisis imperdiet mauris, a lobortis nisi bibendum sed.` },
        { id: `Commodo`, date: `Consectetur`, p: `Phasellus nec magna tempor, maximus augue ac, vestibulum elit.` },
        { id: `Neque`, date: `Malesuada`, p: `Nulla est purus, ullamcorper nec massa nec, imperdiet elementum nisi.` },
        { id: `Feugiat`, date: `Mollis`, p: `Donec sit amet vestibulum lectus. Cras tempus non metus et aliquet. Praesent quis ipsum eget lectus luctus condimentum. Proin gravida neque id libero commodo, lobortis maximus diam gravida. Ut feugiat ipsum sit amet elit varius mollis. Suspendisse fermentum lorem eu quam accumsan, laoreet convallis lectus tristique.` },
        { id: `Lectus`, date: `Consectetur`, p: `Phasellus nec magna tempor, maximus augue ac, vestibulum elit. Mauris vel erat pellentesque, dignissim magna nec, condimentum felis.` },
      ],
    },
  ],
};

/** @note pages/about */
export const about = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `About | ${siteName}`,
    description: `About ${siteName}, the studio policy, and online lessons`,
    url: `https://pages-router-eight.vercel.app/about`,
  },
  section: [
    { 
      a: `temp`,
      h1: `About Temp`,
      h2: `Integer viverra fermentum sollicitudin`,
      div: {
        p: `
        Temp Suscup, sit amet semper mi. Fusce convallis magna quis mi viverra, sed aliquam purus gravida malesuada.
        
        Maecenas quis eleifend lacus, et pulvinar nibh. Donec consectetur ipsum malesuada mollis condimentum. Vitae pharetra massa.
        `,
        span: [ ``, ``, `` ],
        href: `/sign-up`,
      },
      image: img[1].image,
      alt: img[1].alt,
    },
    { 
      a: `policy`,
      h1: `Studio Policy`,
      h2: `Integer viverra sapien fermentum`,
      div: {
        p: `
        Aliquam vitae interdum ipsum, sit amet semper mi. Fusce convallis magna quis mi viverra, sed aliquam purus gravida. Fringilla nisl eu congue.
        
        Maecenas quis eleifend lacus, et pulvinar laoreet leo.
        `,
        span: [ ` Quisque eget viverra, leo auctor ut `, `policy`, `.` ],
        href: `/policy`,
      },
      image: img[2].image,
      alt: img[2].alt,
    },
    { 
      a: `lessons`,
      h1: `Online Lessons`,
      h2: `Duis gravida velit mollis dignissim`,
      div: {
        p: `
        Cras lobortis magna sed nunc maximus, ac ullamcorper nisi rutrum. Vestibulum bibendum tempus rutrum. Quisque nec massa vivamus vel.

        `,
        span: [ `Nunc egestas metus vitae, quam dapibus `, `contact`, ` porta at tortor nec pharetra.
        ` ],
        href: `/contact`,
      },
      image: img[3].image,
      alt: img[3].alt,
    },
  ],
};

/** @note pages/calendar */
export const calendar = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Calendar | ${siteName}`,
    description: `Important dates`,
    url: `https://pages-router-eight.vercel.app/calendar`,
  },
  section: {
    h1: `Important Dates`,
    div: [
      { date: `January - February`, description: `Consequat tempor ultricies` },
      { date: `February - March`, description: `Consectetur adipiscing elit` },
      { date: `March - April`, description: `Proin a sem non massa 🌸` },
      { date: `March - May`, description: `Mattis suscipit eget tempus` },
      { date: `May - June`, description: `Phasellus iaculis ullamcorper` },
      { date: `June - July`, description: `Finibus sodales pulvinar ☀️` },
      { date: `July - August`, description: `Curabitur tincidunt fermentum` },
      { date: `August - September`, description: `Scelerisque fermentum dolor` },
      { date: `September - October`, description: `Mauris pulvinar dictum 🍂` },
      { date: `October - November`, description: `Quisque ante lectus eu` },
      { date: `November - December`, description: `Duis fringilla ipsum hendrerit` },
      { date: `December - January`, description: `Risus vel eleifend varius ❄️` },
    ],
  },
};

/** @note pages/policy */
export const policy = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Policy | ${siteName}`,
    description: `Studio policy`,
    url: `https://pages-router-eight.vercel.app/policy`,
  },
  section: {
    h1: `Studio Policy`,
    p: [
    `Last updated on January 16, 2023`,
    `Aliquam pellentesque dui vel mauris ornare, vulputate lacinia magna faucibus. Sed maximus, elit sit amet sagittis congue, est quam tincidunt velit, vel dictum mauris sapien nec metus. In tristique ante sed orci. Mauris dictum sapien eget egestas rutrum. Cras id erat vulputate, iaculis massa sit amet, luctus lorem. Sed quis placerat ante, at mattis diam. Nulla lectus lacus, molestie in suscipit vel, maximus ac quam.`,
    ],
    div: [
      { 
        a: `teacher-commitments`,
        h2: `Teacher Commitments`,
        p: `Morbi quis mauris id eros rutrum consequat tempus in sapien. Sed libero leo, dictum vel tempor nec, commodo ut tellus. Nulla lectus lacus, molestie in suscipit vel, maximus ac quam. Vivamus eu augue sed nulla bibendum venenatis at sed tellus. Proin sed mauris vitae velit porttitor elementum.
        `
      },
      { 
        a: `student-expectations`,
        h2: `Student Expectations`,
        p: `Vivamus eu augue sed nulla bibendum venenatis at sed tellus. Sed maximus, elit sit amet sagittis congue, est quam tincidunt velit, vel dictum mauris sapien nec metus. In tristique ante sed orci. Morbi quis mauris id eros rutrum consequat tempus in sapien. Sed libero leo, dictum vel tempor nec, commodo ut tellus.
        
        Vivamus ut justo id mi rhoncus pellentesque ac ut tortor. Nam vitae orci vel risus lacinia egestas. 
                
        Aliquam pellentesque dui vel mauris ornare, vulputate lacinia magna faucibus. Pellentesque eros ligula, consequat nec molestie vitae, auctor lacinia velit.
        
        Fusce id iaculis massa. Donec ligula ex, dapibus nec semper non, molestie non purus. Sed maximus, elit sit amet sagittis congue, est quam tincidunt velit, vel dictum mauris sapien nec metus. In tristique ante sed orci. 
        `
      },
      { 
        a: `tuition-and-payment`,
        h2: `Tuition and Payment`,
        p: `Vestibulum hendrerit lectus odio, in hendrerit diam. Proin sed mauris vitae velit porttitor elementum. 
        
        Nulla lectus lacus, molestie in suscipit vel, maximus ac quam. Vivamus eu augue sed nulla bibendum venenatis at sed tellus. In dignissim ac dui eleifend blandit.
        
        Vestibulum vestibulum quis lectus eu cursus. Vivamus sodales, quam ac iaculis aliquet, velit diam tempor diam, sit amet congue dui neque sed felis. Phasellus nec nulla sit amet urna tincidunt ultrices.
        
        Phasellus vel sem augue. Sed at eros nec nunc malesuada auctor.
        
        Vestibulum in mi sit amet ipsum congue egestas. Pellentesque nec arcu consectetur justo pretium placerat vitae quis velit. Suspendisse gravida aliquam mollis. Aenean tempor nisl sit amet diam luctus lacinia. Donec hendrerit mi eu nunc tincidunt iaculis. Duis finibus rhoncus lacus.
        `
      },  
      { 
        a: `schedule-and-cancellations`,
        h2: `Schedule and Cancellations`,
        p: `Vivamus ut justo id mi rhoncus pellentesque ac ut tortor. Nam vitae orci vel risus lacinia egestas. Vestibulum hendrerit lectus odio.
        
        Nisl at fringilla varius, est leo scelerisque lorem, ac elementum risus turpis sit amet sem.
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat, velit quis sagittis ornare.
        
        Proin venenatis odio augue, sed lobortis ex vestibulum ac. Etiam eu diam at libero pharetra sagittis id nec elit. Maecenas pharetra elementum molestie. Ut ut efficitur urna. Sed ac quam a sem rutrum pharetra.
        `
      },  
      { 
        a: `music-and-materials`,
        h2: `Music and Materials`,
        p: `Praesent enim erat, dignissim auctor ipsum eget, pretium semper mauris. Nunc a quam dolor. Ut mauris orci, ultrices sit amet iaculis feugiat, efficitur vel mauris.
        
        Nullam ac mattis purus, eget tincidunt enim. Fusce consequat, turpis ac pulvinar fermentum, urna orci mattis nibh, eu viverra nisi odio in nibh. Donec semper aliquam nulla, eu tristique libero aliquet sit amet. Nam euismod efficitur enim. Suspendisse tincidunt orci eu magna rhoncus luctus.
        `
      },
      { 
        a: `term-commitment`,
        h2: `Term Commitment`,
        p: `Maecenas quis mauris ut lorem scelerisque faucibus ut ut lacus:

        Praesent arcu: Sodales eu Auctor
        Viverra erat: Facilisis mec Cras
        Duis pulvinar: Vel ex Cursus
        
        Fusce vehicula rhoncus justo et cursus. Fusce sagittis magna sed sapien malesuada accumsan curabitur.
        `
      },
      { 
        a: `media-and-privacy`,
        h2: `Media and Privacy`,
        p: `Praesent in arcu eu sem viverra vehicula ac at erat. In facilisis sodales auctor. Cras nec malesuada urna, vel cursus ex. Duis pulvinar id massa eu imperdiet.
        
        Tincidunt faucibus elit vel lobortis. Cras lobortis magna sed nunc maximus, ac ullamcorper nisi rutrum. Vestibulum bibendum tempus.
        `
      },
      { 
        a: `policy-acknowledgment`,
        h2: `Policy Acknowledgment`,
        p: `Proin gravida neque id libero commodo, lobortis maximus diam gravida. Integer sed justo sed risus facilisis blandit quis eget nisl. Fusce venenatis quam at diam hendrerit, sit amet vehicula arcu posuere.
        `
      },
    ],
  },
};

/** @note pages/contact */
export const contact = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Contact | ${siteName}`,
    description: `Get in touch through our email form!`,
    url: `https://pages-router-eight.vercel.app/contact`,
  },
  section: {
    h1: `Get in touch`,
    div: {
      p: `Sed consectetur augue vel turpis nullam, dignissim metus non.`,
      span: [ `
      Fusce rhoncus`, `calendar`, `molestie lorem praesent volutpat ipsum.`],
      href: `/calendar`,
    },
  },
};

/** @note pages/sign-up */
export const signUp = {
  meta: {
    image: img[1].image,
    alt: img[1].alt,
    title: `Sign Up | ${siteName}`,
    description: `Information regarding studio hours and availability`,
    url: `https://pages-router-eight.vercel.app/sign-up`,
  },
  section: {
    url: `https://calendly.com/tannertanner1/trial`,
  },
};