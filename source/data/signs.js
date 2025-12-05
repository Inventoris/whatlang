const signs = [
  { img: "images/russian1.png", lang: "Russian", options: ["Russian", "Ukrainian", "Belarusian", "Bulgarian"] },
  { img: "images/russian2.png", lang: "Russian", options: ["Russian", "Ukrainian", "Belarusian", "Bulgarian"] },
  { img: "images/russian3.png", lang: "Russian", options: ["Russian", "Ukrainian", "Belarusian", "Bulgarian"] },

  { img: "images/georgian1.png", lang: "Georgian", options: ["Georgian", "Armenian", "Azerbaijani", "Russian"] },
  { img: "images/georgian2.png", lang: "Georgian", options: ["Georgian", "Armenian", "Azerbaijani", "Russian"] },
  { img: "images/georgian3.png", lang: "Georgian", options: ["Georgian", "Armenian", "Azerbaijani", "Russian"] },

  { img: "images/armenian1.png", lang: "Armenian", options: ["Armenian", "Georgian", "Persian", "Azerbaijani"] },
  { img: "images/armenian2.png", lang: "Armenian", options: ["Armenian", "Georgian", "Persian", "Azerbaijani"] },
  { img: "images/armenian3.png", lang: "Armenian", options: ["Armenian", "Georgian", "Persian", "Azerbaijani"] },

  { img: "images/azerbaijani1.png", lang: "Azerbaijani", options: ["Azerbaijani", "Turkish", "Kazakh", "Uzbek"] },
  { img: "images/azerbaijani2.png", lang: "Azerbaijani", options: ["Azerbaijani", "Turkish", "Kazakh", "Uzbek"] },
  { img: "images/azerbaijani3.png", lang: "Azerbaijani", options: ["Azerbaijani", "Turkish", "Kazakh", "Uzbek"] },

  { img: "images/english1.png", lang: "English", options: ["English", "German", "Dutch", "French"] },
  { img: "images/english2.png", lang: "English", options: ["English", "German", "Dutch", "French"] },
  { img: "images/english3.png", lang: "English", options: ["English", "German", "Dutch", "French"] },

  { img: "images/spanish1.png", lang: "Spanish", options: ["Spanish", "Portuguese", "Italian", "French"] },
  { img: "images/spanish2.png", lang: "Spanish", options: ["Spanish", "Portuguese", "Italian", "French"] },
  { img: "images/spanish3.png", lang: "Spanish", options: ["Spanish", "Portuguese", "Italian", "French"] },

  { img: "images/portuguese1.png", lang: "Portuguese", options: ["Portuguese", "Spanish", "Galician", "Italian"] },
  { img: "images/portuguese2.png", lang: "Portuguese", options: ["Portuguese", "Spanish", "Galician", "Italian"] },
  { img: "images/portuguese3.png", lang: "Portuguese", options: ["Portuguese", "Spanish", "Galician", "Italian"] },

  { img: "images/ukrainian1.png", lang: "Ukrainian", options: ["Ukrainian", "Russian", "Belarusian", "Bulgarian"] },
  { img: "images/ukrainian2.png", lang: "Ukrainian", options: ["Ukrainian", "Russian", "Belarusian", "Bulgarian"] },
  { img: "images/ukrainian3.png", lang: "Ukrainian", options: ["Ukrainian", "Russian", "Belarusian", "Bulgarian"] },

  { img: "images/belarusian1.png", lang: "Belarusian", options: ["Belarusian", "Russian", "Ukrainian", "Polish"] },
  { img: "images/belarusian2.png", lang: "Belarusian", options: ["Belarusian", "Russian", "Ukrainian", "Polish"] },
  { img: "images/belarusian3.png", lang: "Belarusian", options: ["Belarusian", "Russian", "Ukrainian", "Polish"] },

  { img: "images/french1.png", lang: "French", options: ["French", "Italian", "Spanish", "Portuguese"] },
  { img: "images/french2.png", lang: "French", options: ["French", "Italian", "Spanish", "Portuguese"] },
  { img: "images/french3.png", lang: "French", options: ["French", "Italian", "Spanish", "Portuguese"] },

  { img: "images/vietnamese1.png", lang: "Vietnamese", options: ["Vietnamese", "Thai", "Indonesian", "Chinese"] },
  { img: "images/vietnamese2.png", lang: "Vietnamese", options: ["Vietnamese", "Thai", "Indonesian", "Chinese"] },
  { img: "images/vietnamese3.png", lang: "Vietnamese", options: ["Vietnamese", "Thai", "Indonesian", "Chinese"] },

  { img: "images/thai1.png", lang: "Thai", options: ["Thai", "Khmer", "Lao", "Vietnamese"] },
  { img: "images/thai2.png", lang: "Thai", options: ["Thai", "Khmer", "Lao", "Vietnamese"] },
  { img: "images/thai3.png", lang: "Thai", options: ["Thai", "Khmer", "Lao", "Vietnamese"] },

  { img: "images/mongolian1.png", lang: "Mongolian", options: ["Mongolian", "Kazakh", "Russian", "Buryat"] },
  { img: "images/mongolian2.png", lang: "Mongolian", options: ["Mongolian", "Kazakh", "Russian", "Buryat"] },
  { img: "images/mongolian3.png", lang: "Mongolian", options: ["Mongolian", "Kazakh", "Russian", "Buryat"] },

  { img: "images/korean1.png", lang: "Korean", options: ["Korean", "Japanese", "Chinese", "Vietnamese"] },
  { img: "images/korean2.png", lang: "Korean", options: ["Korean", "Japanese", "Chinese", "Vietnamese"] },
  { img: "images/korean3.png", lang: "Korean", options: ["Korean", "Japanese", "Chinese", "Vietnamese"] },

  { img: "images/khmer1.png", lang: "Khmer", options: ["Khmer", "Thai", "Lao", "Burmese"] },
  { img: "images/khmer2.png", lang: "Khmer", options: ["Khmer", "Thai", "Lao", "Burmese"] },
  { img: "images/khmer3.png", lang: "Khmer", options: ["Khmer", "Thai", "Lao", "Burmese"] },

  { img: "images/kazakh1.png", lang: "Kazakh", options: ["Kazakh", "Uzbek", "Azerbaijani", "Turkish"] },
  { img: "images/kazakh2.png", lang: "Kazakh", options: ["Kazakh", "Uzbek", "Azerbaijani", "Turkish"] },
  { img: "images/kazakh3.png", lang: "Kazakh", options: ["Kazakh", "Uzbek", "Azerbaijani", "Turkish"] },

  { img: "images/japanese1.png", lang: "Japanese", options: ["Japanese", "Chinese", "Korean", "Vietnamese"] },
  { img: "images/japanese2.png", lang: "Japanese", options: ["Japanese", "Chinese", "Korean", "Vietnamese"] },
  { img: "images/japanese3.png", lang: "Japanese", options: ["Japanese", "Chinese", "Korean", "Vietnamese"] },

  { img: "images/indonesian1.png", lang: "Indonesian", options: ["Indonesian", "Malay", "Tagalog", "Vietnamese"] },
  { img: "images/indonesian2.png", lang: "Indonesian", options: ["Indonesian", "Malay", "Tagalog", "Vietnamese"] },
  { img: "images/indonesian3.png", lang: "Indonesian", options: ["Indonesian", "Malay", "Tagalog", "Vietnamese"] },

  { img: "images/hindi1.png", lang: "Hindi", options: ["Hindi", "Nepali", "Marathi", "Punjabi"] },
  { img: "images/hindi2.png", lang: "Hindi", options: ["Hindi", "Nepali", "Marathi", "Punjabi"] },
  { img: "images/hindi3.png", lang: "Hindi", options: ["Hindi", "Nepali", "Marathi", "Punjabi"] },

  { img: "images/chinese1.png", lang: "Chinese", options: ["Chinese", "Japanese", "Korean", "Vietnamese"] },
  { img: "images/chinese2.png", lang: "Chinese", options: ["Chinese", "Japanese", "Korean", "Vietnamese"] },
  { img: "images/chinese3.png", lang: "Chinese", options: ["Chinese", "Japanese", "Korean", "Vietnamese"] },

  { img: "images/arabic1.png", lang: "Arabic", options: ["Arabic", "Persian", "Urdu", "Kurdish"] },
  { img: "images/arabic2.png", lang: "Arabic", options: ["Arabic", "Persian", "Urdu", "Kurdish"] },
  { img: "images/arabic3.png", lang: "Arabic", options: ["Arabic", "Persian", "Urdu", "Kurdish"] },

  { img: "images/danish1.png", lang: "Danish", options: ["Danish", "Norwegian", "Swedish", "German"] },
  { img: "images/danish2.png", lang: "Danish", options: ["Danish", "Norwegian", "Swedish", "German"] },
  { img: "images/danish3.png", lang: "Danish", options: ["Danish", "Norwegian", "Swedish", "German"] },

  { img: "images/norwegian1.png", lang: "Norwegian", options: ["Norwegian", "Danish", "Swedish", "Icelandic"] },
  { img: "images/norwegian2.png", lang: "Norwegian", options: ["Norwegian", "Danish", "Swedish", "Icelandic"] },
  { img: "images/norwegian3.png", lang: "Norwegian", options: ["Norwegian", "Danish", "Swedish", "Icelandic"] },

  { img: "images/swedish1.png", lang: "Swedish", options: ["Swedish", "Norwegian", "Danish", "Finnish"] },
  { img: "images/swedish2.png", lang: "Swedish", options: ["Swedish", "Norwegian", "Danish", "Finnish"] },
  { img: "images/swedish3.png", lang: "Swedish", options: ["Swedish", "Norwegian", "Danish", "Finnish"] },

  { img: "images/finnish1.png", lang: "Finnish", options: ["Finnish", "Estonian", "Hungarian", "Swedish"] },
  { img: "images/finnish2.png", lang: "Finnish", options: ["Finnish", "Estonian", "Hungarian", "Swedish"] },
  { img: "images/finnish3.png", lang: "Finnish", options: ["Finnish", "Estonian", "Hungarian", "Swedish"] },

  { img: "images/estonian1.png", lang: "Estonian", options: ["Estonian", "Finnish", "Latvian", "Lithuanian"] },
  { img: "images/estonian2.png", lang: "Estonian", options: ["Estonian", "Finnish", "Latvian", "Lithuanian"] },
  { img: "images/estonian3.png", lang: "Estonian", options: ["Estonian", "Finnish", "Latvian", "Lithuanian"] },

  { img: "images/latvian1.png", lang: "Latvian", options: ["Latvian", "Lithuanian", "Estonian", "Polish"] },
  { img: "images/latvian2.png", lang: "Latvian", options: ["Latvian", "Lithuanian", "Estonian", "Polish"] },
  { img: "images/latvian3.png", lang: "Latvian", options: ["Latvian", "Lithuanian", "Estonian", "Polish"] },

  { img: "images/lithuanian1.png", lang: "Lithuanian", options: ["Lithuanian", "Latvian", "Polish", "Estonian"] },
  { img: "images/lithuanian2.png", lang: "Lithuanian", options: ["Lithuanian", "Latvian", "Polish", "Estonian"] },
  { img: "images/lithuanian3.png", lang: "Lithuanian", options: ["Lithuanian", "Latvian", "Polish", "Estonian"] },

  { img: "images/hungarian1.png", lang: "Hungarian", options: ["Hungarian", "Finnish", "Estonian", "Romanian"] },
  { img: "images/hungarian2.png", lang: "Hungarian", options: ["Hungarian", "Finnish", "Estonian", "Romanian"] },
  { img: "images/hungarian3.png", lang: "Hungarian", options: ["Hungarian", "Finnish", "Estonian", "Romanian"] },

  { img: "images/slovakian1.png", lang: "Slovak", options: ["Slovak", "Czech", "Polish", "Slovenian"] },
  { img: "images/slovakian2.png", lang: "Slovak", options: ["Slovak", "Czech", "Polish", "Slovenian"] },
  { img: "images/slovakian3.png", lang: "Slovak", options: ["Slovak", "Czech", "Polish", "Slovenian"] },

  { img: "images/czech1.png", lang: "Czech", options: ["Czech", "Slovak", "Polish", "Slovenian"] },
  { img: "images/czech2.png", lang: "Czech", options: ["Czech", "Slovak", "Polish", "Slovenian"] },
  { img: "images/czech3.png", lang: "Czech", options: ["Czech", "Slovak", "Polish", "Slovenian"] },

  { img: "images/polish1.png", lang: "Polish", options: ["Polish", "Czech", "Slovak", "Belarusian"] },
  { img: "images/polish2.png", lang: "Polish", options: ["Polish", "Czech", "Slovak", "Belarusian"] },
  { img: "images/polish3.png", lang: "Polish", options: ["Polish", "Czech", "Slovak", "Belarusian"] },

  { img: "images/german1.png", lang: "German", options: ["German", "Dutch", "English", "Danish"] },
  { img: "images/german2.png", lang: "German", options: ["German", "Dutch", "English", "Danish"] },
  { img: "images/german3.png", lang: "German", options: ["German", "Dutch", "English", "Danish"] },

  { img: "images/italian1.png", lang: "Italian", options: ["Italian", "Spanish", "Portuguese", "French"] },
  { img: "images/italian2.png", lang: "Italian", options: ["Italian", "Spanish", "Portuguese", "French"] },
  { img: "images/italian3.png", lang: "Italian", options: ["Italian", "Spanish", "Portuguese", "French"] },

  { img: "images/romanian1.png", lang: "Romanian", options: ["Romanian", "Italian", "French", "Spanish"] },
  { img: "images/romanian2.png", lang: "Romanian", options: ["Romanian", "Italian", "French", "Spanish"] },
  { img: "images/romanian3.png", lang: "Romanian", options: ["Romanian", "Italian", "French", "Spanish"] },

  { img: "images/bulgarian1.png", lang: "Bulgarian", options: ["Bulgarian", "Russian", "Serbian", "Ukrainian"] },
  { img: "images/bulgarian2.png", lang: "Bulgarian", options: ["Bulgarian", "Russian", "Serbian", "Ukrainian"] },
  { img: "images/bulgarian3.png", lang: "Bulgarian", options: ["Bulgarian", "Russian", "Serbian", "Ukrainian"] },

  { img: "images/turkish1.png", lang: "Turkish", options: ["Turkish", "Azerbaijani", "Kazakh", "Uzbek"] },
  { img: "images/turkish2.png", lang: "Turkish", options: ["Turkish", "Azerbaijani", "Kazakh", "Uzbek"] },
  { img: "images/turkish3.png", lang: "Turkish", options: ["Turkish", "Azerbaijani", "Kazakh", "Uzbek"] },

  { img: "images/greek1.png", lang: "Greek", options: ["Greek", "Bulgarian", "Russian", "Georgian"] },
  { img: "images/greek2.png", lang: "Greek", options: ["Greek", "Bulgarian", "Russian", "Georgian"] },
  { img: "images/greek3.png", lang: "Greek", options: ["Greek", "Bulgarian", "Russian", "Georgian"] },
];
