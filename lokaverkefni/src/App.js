import React from 'react';
import Topbar from './topbar';
import MyResponsiveChoropleth from './worldmap';





function App() {
  const yourData = [
    {
      "id": "AFG",
      "value": 848931
    },
    {
      "id": "AGO",
      "value": 846537
    },
    {
      "id": "ALB",
      "value": 607388
    },
    {
      "id": "ARE",
      "value": 119599
    },
    {
      "id": "ARG",
      "value": 806441
    },
    {
      "id": "ARM",
      "value": 983256
    },
    {
      "id": "ATA",
      "value": 989743
    },
    {
      "id": "ATF",
      "value": 53475
    },
    {
      "id": "AUT",
      "value": 548842
    },
    {
      "id": "AZE",
      "value": 29325
    },
    {
      "id": "BDI",
      "value": 830779
    },
    {
      "id": "BEL",
      "value": 369386
    },
    {
      "id": "BEN",
      "value": 404862
    },
    {
      "id": "BFA",
      "value": 869931
    },
    {
      "id": "BGD",
      "value": 713894
    },
    {
      "id": "BGR",
      "value": 193671
    },
    {
      "id": "BHS",
      "value": 315813
    },
    {
      "id": "BIH",
      "value": 927551
    },
    {
      "id": "BLR",
      "value": 522898
    },
    {
      "id": "BLZ",
      "value": 896215
    },
    {
      "id": "BOL",
      "value": 784766
    },
    {
      "id": "BRN",
      "value": 162759
    },
    {
      "id": "BTN",
      "value": 580475
    },
    {
      "id": "BWA",
      "value": 387895
    },
    {
      "id": "CAF",
      "value": 349263
    },
    {
      "id": "CAN",
      "value": 559260
    },
    {
      "id": "CHE",
      "value": 613263
    },
    {
      "id": "CHL",
      "value": 661924
    },
    {
      "id": "CHN",
      "value": 41081
    },
    {
      "id": "CIV",
      "value": 18182
    },
    {
      "id": "CMR",
      "value": 510399
    },
    {
      "id": "COG",
      "value": 772774
    },
    {
      "id": "COL",
      "value": 781568
    },
    {
      "id": "CRI",
      "value": 264555
    },
    {
      "id": "CUB",
      "value": 507659
    },
    {
      "id": "-99",
      "value": 895998
    },
    {
      "id": "CYP",
      "value": 338538
    },
    {
      "id": "CZE",
      "value": 177363
    },
    {
      "id": "DEU",
      "value": 963673
    },
    {
      "id": "DJI",
      "value": 370292
    },
    {
      "id": "DNK",
      "value": 406071
    },
    {
      "id": "DOM",
      "value": 560690
    },
    {
      "id": "DZA",
      "value": 513540
    },
    {
      "id": "ECU",
      "value": 765921
    },
    {
      "id": "EGY",
      "value": 630824
    },
    {
      "id": "ERI",
      "value": 372926
    },
    {
      "id": "ESP",
      "value": 328179
    },
    {
      "id": "EST",
      "value": 127283
    },
    {
      "id": "ETH",
      "value": 364720
    },
    {
      "id": "FIN",
      "value": 105496
    },
    {
      "id": "FJI",
      "value": 153511
    },
    {
      "id": "FLK",
      "value": 320067
    },
    {
      "id": "FRA",
      "value": 46819
    },
    {
      "id": "GAB",
      "value": 93272
    },
    {
      "id": "GBR",
      "value": 688732
    },
    {
      "id": "GEO",
      "value": 504203
    },
    {
      "id": "GHA",
      "value": 197630
    },
    {
      "id": "GIN",
      "value": 823387
    },
    {
      "id": "GMB",
      "value": 988852
    },
    {
      "id": "GNB",
      "value": 373116
    },
    {
      "id": "GNQ",
      "value": 478302
    },
    {
      "id": "GRC",
      "value": 38246
    },
    {
      "id": "GTM",
      "value": 451805
    },
    {
      "id": "GUY",
      "value": 533749
    },
    {
      "id": "HND",
      "value": 136449
    },
    {
      "id": "HRV",
      "value": 222187
    },
    {
      "id": "HTI",
      "value": 71430
    },
    {
      "id": "HUN",
      "value": 601302
    },
    {
      "id": "IDN",
      "value": 803879
    },
    {
      "id": "IND",
      "value": 149927
    },
    {
      "id": "IRL",
      "value": 484058
    },
    {
      "id": "IRN",
      "value": 409844
    },
    {
      "id": "IRQ",
      "value": 910624
    },
    {
      "id": "ISL",
      "value": 346688
    },
    {
      "id": "ISR",
      "value": 605354
    },
    {
      "id": "ITA",
      "value": 563385
    },
    {
      "id": "JAM",
      "value": 490483
    },
    {
      "id": "JOR",
      "value": 285324
    },
    {
      "id": "JPN",
      "value": 291511
    },
    {
      "id": "KAZ",
      "value": 34363
    },
    {
      "id": "KEN",
      "value": 907489
    },
    {
      "id": "KGZ",
      "value": 474083
    },
    {
      "id": "KHM",
      "value": 2359
    },
    {
      "id": "OSA",
      "value": 367030
    },
    {
      "id": "KWT",
      "value": 721168
    },
    {
      "id": "LAO",
      "value": 524033
    },
    {
      "id": "LBN",
      "value": 928323
    },
    {
      "id": "LBR",
      "value": 855705
    },
    {
      "id": "LBY",
      "value": 281357
    },
    {
      "id": "LKA",
      "value": 174816
    },
    {
      "id": "LSO",
      "value": 564973
    },
    {
      "id": "LTU",
      "value": 119316
    },
    {
      "id": "LUX",
      "value": 304507
    },
    {
      "id": "LVA",
      "value": 225150
    },
    {
      "id": "MAR",
      "value": 473356
    },
    {
      "id": "MDA",
      "value": 34985
    },
    {
      "id": "MDG",
      "value": 41261
    },
    {
      "id": "MEX",
      "value": 348997
    },
    {
      "id": "MKD",
      "value": 573155
    },
    {
      "id": "MLI",
      "value": 319853
    },
    {
      "id": "MMR",
      "value": 910294
    },
    {
      "id": "MNE",
      "value": 348054
    },
    {
      "id": "MNG",
      "value": 148480
    },
    {
      "id": "MOZ",
      "value": 983538
    },
    {
      "id": "MRT",
      "value": 655607
    },
    {
      "id": "MWI",
      "value": 290151
    },
    {
      "id": "MYS",
      "value": 485748
    },
    {
      "id": "NAM",
      "value": 573734
    },
    {
      "id": "NCL",
      "value": 839382
    },
    {
      "id": "NER",
      "value": 361105
    },
    {
      "id": "NGA",
      "value": 427399
    },
    {
      "id": "NIC",
      "value": 676426
    },
    {
      "id": "NLD",
      "value": 673938
    },
    {
      "id": "NOR",
      "value": 693958
    },
    {
      "id": "NPL",
      "value": 857781
    },
    {
      "id": "NZL",
      "value": 323810
    },
    {
      "id": "OMN",
      "value": 106144
    },
    {
      "id": "PAK",
      "value": 39631
    },
    {
      "id": "PAN",
      "value": 142486
    },
    {
      "id": "PER",
      "value": 606746
    },
    {
      "id": "PHL",
      "value": 362749
    },
    {
      "id": "PNG",
      "value": 520677
    },
    {
      "id": "POL",
      "value": 183550
    },
    {
      "id": "PRI",
      "value": 804485
    },
    {
      "id": "PRT",
      "value": 277000
    },
    {
      "id": "PRY",
      "value": 534937
    },
    {
      "id": "QAT",
      "value": 812621
    },
    {
      "id": "ROU",
      "value": 731628
    },
    {
      "id": "RUS",
      "value": 784180
    },
    {
      "id": "RWA",
      "value": 160239
    },
    {
      "id": "ESH",
      "value": 21255
    },
    {
      "id": "SAU",
      "value": 651135
    },
    {
      "id": "SDN",
      "value": 591715
    },
    {
      "id": "SDS",
      "value": 367806
    },
    {
      "id": "SEN",
      "value": 936536
    },
    {
      "id": "SLB",
      "value": 665938
    },
    {
      "id": "SLE",
      "value": 271567
    },
    {
      "id": "SLV",
      "value": 908279
    },
    {
      "id": "ABV",
      "value": 452958
    },
    {
      "id": "SOM",
      "value": 640169
    },
    {
      "id": "SRB",
      "value": 649062
    },
    {
      "id": "SUR",
      "value": 16121
    },
    {
      "id": "SVK",
      "value": 159881
    },
    {
      "id": "SVN",
      "value": 516254
    },
    {
      "id": "SWZ",
      "value": 219279
    },
    {
      "id": "SYR",
      "value": 656741
    },
    {
      "id": "TCD",
      "value": 14173
    },
    {
      "id": "TGO",
      "value": 128177
    },
    {
      "id": "THA",
      "value": 428849
    },
    {
      "id": "TJK",
      "value": 423136
    },
    {
      "id": "TKM",
      "value": 775698
    },
    {
      "id": "TLS",
      "value": 354988
    },
    {
      "id": "TTO",
      "value": 14499
    },
    {
      "id": "TUN",
      "value": 952248
    },
    {
      "id": "TUR",
      "value": 728787
    },
    {
      "id": "TWN",
      "value": 694129
    },
    {
      "id": "TZA",
      "value": 911607
    },
    {
      "id": "UGA",
      "value": 707223
    },
    {
      "id": "UKR",
      "value": 399910
    },
    {
      "id": "URY",
      "value": 199078
    },
    {
      "id": "USA",
      "value": 367101
    },
    {
      "id": "UZB",
      "value": 899612
    },
    {
      "id": "VEN",
      "value": 82878
    },
    {
      "id": "VNM",
      "value": 303162
    },
    {
      "id": "VUT",
      "value": 724419
    },
    {
      "id": "PSE",
      "value": 31325
    },
    {
      "id": "YEM",
      "value": 552010
    },
    {
      "id": "ZAF",
      "value": 561965
    },
    {
      "id": "ZMB",
      "value": 903859
    },
    {
      "id": "ZWE",
      "value": 987175
    },
    {
      "id": "KOR",
      "value": 640981
    }
  ];
  return (
    <div className="App">
      <Topbar />
      <div style={{height: '300px'}}>
        <MyResponsiveChoropleth data={yourData}/>
      </div>
      
      {/* Your other components/content goes here */}
    </div>
  );
}


export default App;
