{"filter":false,"title":"loggedinhome.component.ts","tooltip":"/angular2-lab5/src/app/loggedinhome/loggedinhome.component.ts","undoManager":{"mark":77,"position":77,"stack":[[{"start":{"row":27,"column":4},"end":{"row":27,"column":5},"action":"remove","lines":["/"],"id":2}],[{"start":{"row":27,"column":3},"end":{"row":27,"column":4},"action":"remove","lines":["*"],"id":3}],[{"start":{"row":25,"column":3},"end":{"row":25,"column":4},"action":"remove","lines":["*"],"id":4}],[{"start":{"row":25,"column":2},"end":{"row":25,"column":3},"action":"remove","lines":["/"],"id":5}],[{"start":{"row":49,"column":54},"end":{"row":50,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":50,"column":0},"end":{"row":50,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":50,"column":15},"end":{"row":50,"column":69},"action":"remove","lines":["chordprosheets => this.chordProSheets = chordprosheets"],"id":7},{"start":{"row":50,"column":15},"end":{"row":53,"column":9},"action":"insert","lines":["(chordprosheets) => {","      this.chordProSheetViews = chordprosheets.map(chordprosheet => {","        return {chordProSheet: chordprosheet, visible: false};","      });"]}],[{"start":{"row":53,"column":9},"end":{"row":54,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":54,"column":0},"end":{"row":54,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":54,"column":4},"end":{"row":54,"column":6},"action":"remove","lines":["  "],"id":9}],[{"start":{"row":54,"column":4},"end":{"row":54,"column":5},"action":"insert","lines":["}"],"id":10}],[{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":9,"column":0},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":12}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":37},"action":"insert","lines":["var chordpro = require(\"chordprojs\");"],"id":13}],[{"start":{"row":17,"column":2},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":15},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":18,"column":2},"end":{"row":18,"column":22},"action":"insert","lines":["chordpro = chordpro;"],"id":16}],[{"start":{"row":19,"column":2},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":19,"column":2},"end":{"row":19,"column":68},"action":"insert","lines":["chordProSheetViews: {chordProSheet: any, visible: boolean}[] = [];"],"id":18}],[{"start":{"row":30,"column":2},"end":{"row":30,"column":3},"action":"insert","lines":["/"],"id":19}],[{"start":{"row":30,"column":3},"end":{"row":30,"column":4},"action":"insert","lines":["*"],"id":20}],[{"start":{"row":32,"column":3},"end":{"row":32,"column":4},"action":"insert","lines":["*"],"id":21}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["/"],"id":22}],[{"start":{"row":40,"column":52},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":41,"column":0},"end":{"row":41,"column":32},"action":"insert","lines":["                                "]}],[{"start":{"row":41,"column":32},"end":{"row":47,"column":41},"action":"insert","lines":["//Get logged in user's chordprosheets","    this.chordProSheetService.getUsersChordProSheets()","    .subscribe((chordprosheets) => {","      this.chordProSheetViews = chordprosheets.map(chordprosheet => {","        return {chordProSheet: chordprosheet, visible: false};","      });","    }, err => console.log(\"Get failed\"));"],"id":24}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":25},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":26},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":27},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":28},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":29},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":30},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":31},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":32},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":33},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":34},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":35},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":36},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":37},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":2},"action":"insert","lines":["  "],"id":38},{"start":{"row":43,"column":0},"end":{"row":43,"column":2},"action":"insert","lines":["  "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":2},"action":"insert","lines":["  "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":2},"action":"insert","lines":["  "]},{"start":{"row":46,"column":0},"end":{"row":46,"column":2},"action":"insert","lines":["  "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":50,"column":32},"end":{"row":50,"column":33},"action":"insert","lines":["/"],"id":39}],[{"start":{"row":50,"column":33},"end":{"row":50,"column":34},"action":"insert","lines":["/"],"id":40}],[{"start":{"row":49,"column":32},"end":{"row":50,"column":185},"action":"remove","lines":["//Get logged in user's chordprosheets","                                //this.chordProSheetService.getUsersChordProSheets().subscribe(chordprosheets => this.chordProSheets = chordprosheets, err => console.log(\"Get failed\"));"],"id":41}],[{"start":{"row":49,"column":30},"end":{"row":49,"column":32},"action":"remove","lines":["  "],"id":42}],[{"start":{"row":49,"column":28},"end":{"row":49,"column":30},"action":"remove","lines":["  "],"id":43}],[{"start":{"row":49,"column":26},"end":{"row":49,"column":28},"action":"remove","lines":["  "],"id":44}],[{"start":{"row":49,"column":24},"end":{"row":49,"column":26},"action":"remove","lines":["  "],"id":45}],[{"start":{"row":49,"column":22},"end":{"row":49,"column":24},"action":"remove","lines":["  "],"id":46}],[{"start":{"row":49,"column":20},"end":{"row":49,"column":22},"action":"remove","lines":["  "],"id":47}],[{"start":{"row":49,"column":18},"end":{"row":49,"column":20},"action":"remove","lines":["  "],"id":48}],[{"start":{"row":49,"column":16},"end":{"row":49,"column":18},"action":"remove","lines":["  "],"id":49}],[{"start":{"row":49,"column":14},"end":{"row":49,"column":16},"action":"remove","lines":["  "],"id":50}],[{"start":{"row":49,"column":12},"end":{"row":49,"column":14},"action":"remove","lines":["  "],"id":51}],[{"start":{"row":49,"column":10},"end":{"row":49,"column":12},"action":"remove","lines":["  "],"id":52}],[{"start":{"row":49,"column":8},"end":{"row":49,"column":10},"action":"remove","lines":["  "],"id":53}],[{"start":{"row":49,"column":6},"end":{"row":49,"column":8},"action":"remove","lines":["  "],"id":54}],[{"start":{"row":49,"column":4},"end":{"row":49,"column":6},"action":"remove","lines":["  "],"id":55}],[{"start":{"row":49,"column":2},"end":{"row":49,"column":4},"action":"remove","lines":["  "],"id":56}],[{"start":{"row":49,"column":0},"end":{"row":49,"column":2},"action":"remove","lines":["  "],"id":57}],[{"start":{"row":48,"column":52},"end":{"row":49,"column":0},"action":"remove","lines":["",""],"id":58}],[{"start":{"row":32,"column":5},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":59},{"start":{"row":33,"column":0},"end":{"row":33,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":33,"column":2},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":60},{"start":{"row":34,"column":0},"end":{"row":34,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":34,"column":2},"end":{"row":36,"column":3},"action":"insert","lines":["viewFullScreen(chordProSheetTitle: string, owner: string) {","    this.router.navigate(['/fullscreen', chordProSheetTitle, owner]);","  }"],"id":61}],[{"start":{"row":30,"column":0},"end":{"row":32,"column":5},"action":"remove","lines":["  /*viewChordProSheet(string: chordProSheetTitle, string: chordProSheetOwner) {","    //this.router.navigate(['/chordprosheetview', chordProSheetTitle, chordProSheetOwner]);","  }*/"],"id":62}],[{"start":{"row":29,"column":2},"end":{"row":30,"column":0},"action":"remove","lines":["",""],"id":63}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":2},"action":"remove","lines":["  "],"id":64}],[{"start":{"row":28,"column":3},"end":{"row":29,"column":0},"action":"remove","lines":["",""],"id":65}],[{"start":{"row":60,"column":36},"end":{"row":61,"column":0},"action":"insert","lines":["",""],"id":66},{"start":{"row":61,"column":0},"end":{"row":61,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":61,"column":6},"end":{"row":61,"column":33},"action":"insert","lines":["if (chordprosheets != []) {"],"id":67}],[{"start":{"row":62,"column":0},"end":{"row":62,"column":2},"action":"insert","lines":["  "],"id":68},{"start":{"row":63,"column":0},"end":{"row":63,"column":2},"action":"insert","lines":["  "]},{"start":{"row":64,"column":0},"end":{"row":64,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":64,"column":11},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":69},{"start":{"row":65,"column":0},"end":{"row":65,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":65,"column":8},"end":{"row":65,"column":9},"action":"insert","lines":["}"],"id":70},{"start":{"row":65,"column":0},"end":{"row":65,"column":8},"action":"remove","lines":["        "]},{"start":{"row":65,"column":0},"end":{"row":65,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":25,"column":2},"end":{"row":26,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":26,"column":2},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":72},{"start":{"row":27,"column":0},"end":{"row":27,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":2},"action":"remove","lines":["  "],"id":74}],[{"start":{"row":25,"column":2},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":75}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"remove","lines":["  "],"id":76}],[{"start":{"row":24,"column":136},"end":{"row":25,"column":0},"action":"remove","lines":["",""],"id":77}],[{"start":{"row":51,"column":3},"end":{"row":52,"column":0},"action":"insert","lines":["",""],"id":78},{"start":{"row":52,"column":0},"end":{"row":52,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":52,"column":2},"end":{"row":53,"column":0},"action":"insert","lines":["",""],"id":79},{"start":{"row":53,"column":0},"end":{"row":53,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":53,"column":2},"end":{"row":55,"column":3},"action":"insert","lines":["viewVersions(chordProSheetTitle: string, owner: string) {","    this.router.navigate(['/versions', chordProSheetTitle, owner]);","  }"],"id":80}]]},"ace":{"folds":[],"scrolltop":721,"scrollleft":0,"selection":{"start":{"row":42,"column":75},"end":{"row":42,"column":75},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":44,"state":"start","mode":"ace/mode/typescript"}},"timestamp":1480891034620,"hash":"358413b7e34086f8063b2dcd39ee75393edde661"}