import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState("null");

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/840464/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    setTrailerId(trailer.key);
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    <div>
      <iframe
        src={" https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {

// {
//   "id": 840464,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Hold on tight for a behind the scenes look at Greenland 2: Migration",
//       "key": "7OUlF8n55Yk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2026-01-29T17:00:00.000Z",
//       "id": "697ea4d844115cebdc974109"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Bring home the action",
//       "key": "S2iTwzUiBM0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-27T18:00:00.000Z",
//       "id": "697ea49daf8d1075b9d44414"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A must see.",
//       "key": "zwfCPPttT4s",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-16T17:30:35.000Z",
//       "id": "697012df6c8e62783055247a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Get to the theater.",
//       "key": "t7_YshHJkTk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-15T17:12:03.000Z",
//       "id": "6970131f8dd9b794dfa908a1"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Edge-of-your-seat action.",
//       "key": "x0rlW0ZTKTM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-14T17:31:20.000Z",
//       "id": "6970133677fdfbe3a855248c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Fans are raving about Greenland 2: Migration. What did you think?",
//       "key": "4JIlEib6wDo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2026-01-13T20:00:03.000Z",
//       "id": "697012bc3c06ec0e10fd0cd4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Witness the action only in theaters.",
//       "key": "c_K8NZC4vtw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-13T18:00:47.000Z",
//       "id": "69701389df532e8234813ac4"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Taking things to the next level.",
//       "key": "G6XJs3to5tQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-12T20:00:11.000Z",
//       "id": "69657311aac10f2b6d284b95"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Gerard Butler brings the non-stop action in Greenland 2: Migration",
//       "key": "57QGBWMW93I",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-11T17:00:08.000Z",
//       "id": "6963e03614f7ca1343bd3f66"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Watch the journey unfold in theaters.",
//       "key": "5_ai1y1tuZo",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-10T21:00:08.000Z",
//       "id": "6962d0e50ccd9e2746364af3"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Watch your step.",
//       "key": "3XbcJwNbNHs",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2026-01-09T23:09:22.000Z",
//       "id": "6961947111e37f7ab11d83b5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A big screen experience that delivers.",
//       "key": "EUFuCTfu468",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-09T18:00:14.000Z",
//       "id": "69619509e75773b848d14884"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Round two begins now.",
//       "key": "cFO5JiDV3wQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-09T17:01:11.000Z",
//       "id": "696194c37839d2211a3d67f0"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "No turning back. Greenland 2: Migration hits theaters TOMORROW.",
//       "key": "XB2tX9wLQRQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-08T17:30:20.000Z",
//       "id": "6961941e0ccd9e27463644cb"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Big action. Big SCREEN. Greenland 2: Migration hits theaters this Friday.",
//       "key": "rvaQRK0bQ84",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-07T22:10:24.000Z",
//       "id": "695fa32421b452ff74276a22"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The migration begins.",
//       "key": "4qNwhomGRg8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-07T17:31:36.000Z",
//       "id": "695e9cd49b6e4e134ed1185a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "This is not a drill.",
//       "key": "6tRgvr7EY1E",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-06T19:14:22.000Z",
//       "id": "695e3fd243e5ea0859a2da7d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Get ready for \"pulse-pounding\" action THIS FRIDAY.",
//       "key": "rh3xETesqus",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-05T22:00:56.000Z",
//       "id": "695d56f6f4aaa5f049029665"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Final Trailer",
//       "key": "hiD3zk0ZRFg",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2026-01-05T14:15:24.000Z",
//       "id": "695c05e09f241e7c49769fd5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Don’t look back.",
//       "key": "HUwsSYiARxQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-03T18:00:16.000Z",
//       "id": "695982682144de8bba3bdf60"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "It’s time.",
//       "key": "isRq0Kh9wsI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-02T19:00:45.000Z",
//       "id": "695939f825713176bbd7bd5f"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "In one week, witness the journey on the big screen.",
//       "key": "D4gCKL9QYhE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-02T17:03:21.000Z",
//       "id": "69580061556134230fc37854"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "New year, new world",
//       "key": "T9E9tD0g2_o",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2026-01-01T18:00:26.000Z",
//       "id": "695800916d2b236ebdd7b335"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Prepare for action.",
//       "key": "39kGb_xbErw",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-31T19:00:03.000Z",
//       "id": "69564caea00713496acc85a5"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "It's time for a new beginning.",
//       "key": "1_o21IFg-gA",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-31T17:13:42.000Z",
//       "id": "69564cf1331d3a25e7cc85ad"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "It’s go time.",
//       "key": "yyrhy_Sc6KQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-30T18:07:48.000Z",
//       "id": "69564d38a41d97424f74f468"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Who can you trust?",
//       "key": "F9ZRoX0jRj8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-29T17:30:04.000Z",
//       "id": "69564d5c53166d948ee42313"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "It’s now or never.",
//       "key": "hB75DMD8KgI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-28T17:05:34.000Z",
//       "id": "6951677892e133af1674e218"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Gerard Butler is in top form.",
//       "key": "8CaGYcfEf98",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-26T17:00:09.000Z",
//       "id": "694ec31ceec302ec7c2fbb8b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Let your heart lead you home.",
//       "key": "wMpV5VBROMc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-25T17:01:35.000Z",
//       "id": "694db216f159144b35fb2494"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The year’s first must-see film.",
//       "key": "afXkF3ovBEQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-24T17:30:01.000Z",
//       "id": "694c71b439630351cc811727"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A chance to start again.",
//       "key": "rra3aB08WbQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-22T23:37:06.000Z",
//       "id": "6949d79894041a0192812da9"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The only option is to keep going.",
//       "key": "WLhLiiaj1fc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-20T17:50:53.000Z",
//       "id": "6946fcfd806b75e8872fbc91"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "You blink, you buy tickets.",
//       "key": "Gpm2B0gfiBQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-12-19T17:00:35.000Z",
//       "id": "694997e1bba2840a8a812a52"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Built for the big screen.",
//       "key": "4mTa3UOfGpI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2025-12-18T01:00:24.000Z",
//       "id": "69444024b0750093e238bf9b"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Action meant for the big screen. Get tickets NOW.",
//       "key": "2LJQ2olzCOc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-17T17:30:29.000Z",
//       "id": "6944408b6180aeaa1a0fb1a6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer 2",
//       "key": "_FEOCxb6gC0",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-12-17T14:30:05.000Z",
//       "id": "6942ca4c3e076467442dc374"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Everything’s on the line.",
//       "key": "cgGKUN5x6ZI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-16T17:30:00.000Z",
//       "id": "6942b369b438b17b0b7a2c4e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "A new world. A new mission.",
//       "key": "UGBHWvH4yTQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-15T18:10:13.000Z",
//       "id": "69413758d5db940074f0ded6"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Clip 'Chutes and Ladders’",
//       "key": "iRH5Aw7jvkc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-12-09T20:13:31.000Z",
//       "id": "693d9e7fa011253a2283e743"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Forward is the only way.",
//       "key": "689hSIk0gsY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-08T18:00:08.000Z",
//       "id": "69381805cc491dae4a63854a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Get to the crater.",
//       "key": "2Xnl9_uJxJc",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-12-04T18:02:14.000Z",
//       "id": "6931d8de6025a82bf0f91443"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Clip - ‘Fragment Strike’",
//       "key": "W_OTmtikAJE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-12-03T19:59:59.000Z",
//       "id": "6930a4c573f73718c46ee234"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "This Thanksgiving, don't fight with your family — fight for your family.",
//       "key": "BdFoswul4_0",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-11-27T18:00:12.000Z",
//       "id": "6929c6ce4779d992ddd9d49c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Clip 'Right On Top Of You'",
//       "key": "e9GaWWOrfCI",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2025-11-20T18:59:58.000Z",
//       "id": "691f6de0b41a7156f82e2c00"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "No turning back now.",
//       "key": "UyhOcGMcbD8",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-11-18T17:00:52.000Z",
//       "id": "691e596aaaba19850e058201"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "The fight for survival isn’t over.",
//       "key": "cE-sIeuhSak",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-11-06T21:00:44.000Z",
//       "id": "690e2ec3212f6c374bce7c30"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Their journey is far from over.",
//       "key": "qu6-0EEEG4I",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2025-11-03T18:31:08.000Z",
//       "id": "690b8c5522e0cce1670710ee"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Trailer",
//       "key": "H8ieN10lX40",
//       "site": "YouTube",
//       "size": 2160,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2025-09-25T16:00:01.000Z",
//       "id": "68d5729c2ff5dbc123957018"
//     }
//   ]
// }

//   }
