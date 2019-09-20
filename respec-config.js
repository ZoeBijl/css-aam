var respecConfig = {
  includePermalinks: true,

  // specification status (e.g., WD, LC, NOTE, etc.). If in doubt use ED.
  specStatus: "ED",
  //crEnd:                "2012-04-30",
  //perEnd:               "2013-07-23",
  //publishDate:           "2013-08-22",
  diffTool: "http://www.aptest.com/standards/htmldiff/htmldiff.pl",

  // the specifications short name, as in http://www.w3.org/TR/short-name/
  shortName: "css-aam-1.0",

  // if you wish the publication date to be other than today, set this
  // publishDate:  "2009-08-06",
  copyrightStart: "2016",
  license: "document",

  // if there is a previously published draft, uncomment this and set its YYYY-MM-DD date
  // and its maturity status
  //previousPublishDate:  "2014-03-20",
  //previousMaturity:     "REC",
  //prevRecURI:           "http://www.w3.org/TR/2014/REC-wai-aria-implementation-20140320/",
  //previousDiffURI:      "http://www.w3.org/TR/2014/REC-wai-aria-implementation-20140320/",

  // if there a publicly available Editors Draft, this is the link
  edDraftURI: "http://w3c.github.io/css-aam/",

  // if this is a LCWD, uncomment and set the end of its review period
  // lcEnd: "2012-02-21",

  // editors, add as many as you like
  // only "name" is required
  editors: [
    {
      name: "Ian Pouncey",
      company: "The Paciello Group",
      companyURL: "https://www.paciellogroup.com/",
    },
    {
      name: "Joanmarie Diggs",
      company: "Igalia, S.L.",
      companyURL: "https://www.igalia.com",
      w3cid: 68182
    },
    {
      name: "Zoë Bijl",
      company: "Invited Expert"
    },
  ],
  // authors, add as many as you like.
  // This is optional, uncomment if you have authors as well as editors.
  // only "name" is required. Same format as editors.

  //authors:  [
  //    { name: "Your Name", url: "http://example.org/",
  //      company: "Your Company", companyURI: "http://example.com/" },
  //],

  /*
  alternateFormats: [
        { uri: 'dpub-aam-diff.html',
          label: "Diff from Previous Recommendation" } ,
        { uri: 'dpub-aam.ps',
          label: "PostScript version" },
        { uri: 'dpub-aam.pdf',
          label: "PDF version" }
  ],
  */

  // Working group info
  wg: ["Accessible Rich Internet Applications Working Group", "Accessible Platform Architectures Working Group", "CSS Working Group"],
  wgURI: ["https://www.w3.org/WAI/ARIA/", "https://www.w3.org/WAI/APA/", "https://www.w3.org/Style/CSS/"],
  wgPublicList: "public-css-a11y",

  // URI of the patent status for this WG, for Rec-track documents
  // !!!! IMPORTANT !!!!
  // This is important for Rec-track documents, do not copy a patent URI from a random
  // document unless you know what you're doing. If in doubt ask your friendly neighbourhood
  // Team Contact.
  wgPatentURI: ["http://www.w3.org/2004/01/pp-impl/83726/status", "https://www.w3.org/2004/01/pp-impl/83907/status", "https://www.w3.org/2004/01/pp-impl/32061/status"],

  tocIntroductory: true,
  //maxTocLevel: 4,

  ariaSpecURLs: {
    "ED": "https://w3c.github.io/aria/aria/aria.html",
    "FPWD": "http://www.w3.org/TR/wai-aria-1.1/",
    "WD": "http://www.w3.org/TR/wai-aria-1.1/",
    "REC": "http://www.w3.org/TR/wai-aria/"
  },
  accNameURLs: {
    "ED": "http://w3c.github.io/aria/accname-aam/accname-aam.html",
    "WD": "http://www.w3.org/TR/accname-aam-1.1/",
    "FPWD": "http://www.w3.org/TR/accname-aam-1.1/",
    "REC": "http://www.w3.org/TR/accname-aam/"
  },

  coreMappingURLs: {
    "ED": "http://w3c.github.io/aria/core-aam/core-aam.html",
    "WD": "http://www.w3.org/TR/core-aam-1.1/",
    "FPWD": "http://www.w3.org/TR/core-aam-1.1/",
    "REC": "http://www.w3.org/TR/wai-aria-implementation/"
  },
  dpubModURLs: {
    "ED": "http://w3c.github.io/aria/aria/dpub.html",
    "FPWD": "http://www.w3.org/TR/dpub-aria-1.0/",
    "WD": "http://www.w3.org/TR/dpub-aria-1.0/",
    "REC": "http://www.w3.org/TR/dpub-aria/"
  },

  localBiblio: biblio,

  preProcess: [linkCrossReferences]
}
