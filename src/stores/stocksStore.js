import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStocksStore = defineStore('stocks', () => {
  const stocksNames = ref(
    [
      'Bitcoin',
      'EMIM',
      'XFVT',
      'SWIG 80',
      'WIG 20',
      'MWIG 40',
      'BNB',
      'SGLN',
      'Amazon',
      'Tesla',
      'S&P 500',
      'NASDAQ',
      'Nvidia',
      'MSCI World',
      'DAX',
      'IXIC',
      'DJI',
      'VIX',
      'UKX',
      'TSX',
      'RUI',
      'Comarch',
      'CD Projekt',
      'LPP',
      'KGHM',
      'Allegro',
      'Asseco',
      'Dino Polska',
      'PZU',
      'Orange PL',
      'PGE',
      'PKN Orlen',
      'Pepco Group',
      'Cyfrowy Polsat',
      'Alior Bank',
      'Pekao',
      'mBank'
    ].sort()
  )

  const bitcoin = ref({
    labels: [
      '02.08.2022',
      '03.08.2022',
      '04.08.2022',
      '05.08.2022',
      '06.08.2022',
      '07.08.2022',
      '08.08.2022',
      '09.08.2022',
      '10.08.2022',
      '11.08.2022',
      '12.08.2022',
      '13.08.2022',
      '14.08.2022',
      '15.08.2022',
      '16.08.2022',
      '17.08.2022',
      '18.08.2022',
      '19.08.2022',
      '20.08.2022',
      '21.08.2022',
      '22.08.2022',
      '23.08.2022',
      '24.08.2022',
      '25.08.2022',
      '26.08.2022',
      '27.08.2022',
      '28.08.2022',
      '29.08.2022',
      '30.08.2022',
      '31.08.2022',
      '01.09.2022',
      '02.09.2022',
      '03.09.2022',
      '04.09.2022',
      '05.09.2022',
      '06.09.2022',
      '07.09.2022',
      '08.09.2022',
      '09.09.2022',
      '10.09.2022',
      '11.09.2022',
      '12.09.2022',
      '13.09.2022',
      '14.09.2022',
      '15.09.2022',
      '16.09.2022',
      '17.09.2022',
      '18.09.2022',
      '19.09.2022',
      '20.09.2022',
      '21.09.2022',
      '22.09.2022',
      '23.09.2022',
      '24.09.2022',
      '25.09.2022',
      '26.09.2022',
      '27.09.2022',
      '28.09.2022',
      '29.09.2022',
      '30.09.2022',
      '01.10.2022',
      '02.10.2022',
      '03.10.2022',
      '04.10.2022',
      '05.10.2022',
      '06.10.2022',
      '07.10.2022',
      '08.10.2022',
      '09.10.2022',
      '10.10.2022',
      '11.10.2022',
      '12.10.2022',
      '13.10.2022',
      '14.10.2022',
      '15.10.2022',
      '16.10.2022',
      '17.10.2022',
      '18.10.2022',
      '19.10.2022',
      '20.10.2022',
      '21.10.2022',
      '22.10.2022',
      '23.10.2022',
      '24.10.2022',
      '25.10.2022',
      '26.10.2022',
      '27.10.2022',
      '28.10.2022',
      '29.10.2022',
      '30.10.2022',
      '31.10.2022',
      '01.11.2022',
      '02.11.2022',
      '03.11.2022',
      '04.11.2022',
      '05.11.2022',
      '06.11.2022',
      '07.11.2022',
      '08.11.2022',
      '09.11.2022',
      '10.11.2022',
      '11.11.2022',
      '12.11.2022',
      '13.11.2022',
      '14.11.2022',
      '15.11.2022',
      '16.11.2022',
      '17.11.2022',
      '18.11.2022',
      '19.11.2022',
      '20.11.2022',
      '21.11.2022',
      '22.11.2022',
      '23.11.2022',
      '24.11.2022',
      '25.11.2022',
      '26.11.2022',
      '27.11.2022',
      '28.11.2022',
      '29.11.2022',
      '30.11.2022',
      '01.12.2022',
      '02.12.2022',
      '03.12.2022',
      '04.12.2022',
      '05.12.2022',
      '06.12.2022',
      '07.12.2022',
      '08.12.2022',
      '09.12.2022',
      '10.12.2022',
      '11.12.2022',
      '12.12.2022',
      '13.12.2022',
      '14.12.2022',
      '15.12.2022',
      '16.12.2022',
      '17.12.2022',
      '18.12.2022',
      '19.12.2022',
      '20.12.2022',
      '21.12.2022',
      '22.12.2022',
      '23.12.2022',
      '24.12.2022',
      '25.12.2022',
      '26.12.2022',
      '27.12.2022',
      '28.12.2022',
      '29.12.2022',
      '30.12.2022',
      '31.12.2022',
      '01.01.2023',
      '02.01.2023',
      '03.01.2023',
      '04.01.2023',
      '05.01.2023',
      '06.01.2023',
      '07.01.2023',
      '08.01.2023',
      '09.01.2023',
      '10.01.2023',
      '11.01.2023',
      '12.01.2023',
      '13.01.2023',
      '14.01.2023',
      '15.01.2023',
      '16.01.2023',
      '17.01.2023',
      '18.01.2023',
      '19.01.2023',
      '20.01.2023',
      '21.01.2023',
      '22.01.2023',
      '23.01.2023',
      '24.01.2023',
      '25.01.2023',
      '26.01.2023',
      '27.01.2023',
      '28.01.2023',
      '29.01.2023',
      '30.01.2023',
      '31.01.2023',
      '01.02.2023',
      '02.02.2023',
      '03.02.2023',
      '04.02.2023',
      '05.02.2023',
      '06.02.2023',
      '07.02.2023',
      '08.02.2023',
      '09.02.2023',
      '10.02.2023',
      '11.02.2023',
      '12.02.2023',
      '13.02.2023',
      '14.02.2023',
      '15.02.2023',
      '16.02.2023',
      '17.02.2023',
      '18.02.2023',
      '19.02.2023',
      '20.02.2023',
      '21.02.2023',
      '22.02.2023',
      '23.02.2023',
      '24.02.2023',
      '25.02.2023',
      '26.02.2023',
      '27.02.2023',
      '28.02.2023',
      '01.03.2023',
      '02.03.2023',
      '03.03.2023',
      '04.03.2023',
      '05.03.2023',
      '06.03.2023',
      '07.03.2023',
      '08.03.2023',
      '09.03.2023',
      '10.03.2023',
      '11.03.2023',
      '12.03.2023',
      '13.03.2023',
      '14.03.2023',
      '15.03.2023',
      '16.03.2023',
      '17.03.2023',
      '18.03.2023',
      '19.03.2023',
      '20.03.2023',
      '21.03.2023',
      '22.03.2023',
      '23.03.2023',
      '24.03.2023',
      '25.03.2023',
      '26.03.2023',
      '27.03.2023',
      '28.03.2023',
      '29.03.2023',
      '30.03.2023',
      '31.03.2023',
      '01.04.2023',
      '02.04.2023',
      '03.04.2023',
      '04.04.2023',
      '05.04.2023',
      '06.04.2023',
      '07.04.2023',
      '08.04.2023',
      '09.04.2023',
      '10.04.2023',
      '11.04.2023',
      '12.04.2023',
      '13.04.2023',
      '14.04.2023',
      '15.04.2023',
      '16.04.2023',
      '17.04.2023',
      '18.04.2023',
      '19.04.2023',
      '20.04.2023',
      '21.04.2023',
      '22.04.2023',
      '23.04.2023',
      '24.04.2023',
      '25.04.2023',
      '26.04.2023',
      '27.04.2023',
      '28.04.2023',
      '29.04.2023',
      '30.04.2023',
      '01.05.2023',
      '02.05.2023',
      '03.05.2023',
      '04.05.2023',
      '05.05.2023',
      '06.05.2023',
      '07.05.2023',
      '08.05.2023',
      '09.05.2023',
      '10.05.2023',
      '11.05.2023',
      '12.05.2023',
      '13.05.2023',
      '14.05.2023',
      '15.05.2023',
      '16.05.2023',
      '17.05.2023',
      '18.05.2023',
      '19.05.2023',
      '20.05.2023',
      '21.05.2023',
      '22.05.2023',
      '23.05.2023',
      '24.05.2023',
      '25.05.2023',
      '26.05.2023',
      '27.05.2023',
      '28.05.2023',
      '29.05.2023',
      '30.05.2023',
      '31.05.2023',
      '01.06.2023',
      '02.06.2023',
      '03.06.2023',
      '04.06.2023',
      '05.06.2023',
      '06.06.2023',
      '07.06.2023',
      '08.06.2023',
      '09.06.2023',
      '10.06.2023',
      '11.06.2023',
      '12.06.2023',
      '13.06.2023',
      '14.06.2023',
      '15.06.2023',
      '16.06.2023',
      '17.06.2023',
      '18.06.2023',
      '19.06.2023',
      '20.06.2023',
      '21.06.2023',
      '22.06.2023',
      '23.06.2023',
      '24.06.2023',
      '25.06.2023',
      '26.06.2023',
      '27.06.2023',
      '28.06.2023',
      '29.06.2023',
      '30.06.2023',
      '01.07.2023',
      '02.07.2023',
      '03.07.2023',
      '04.07.2023',
      '05.07.2023',
      '06.07.2023',
      '07.07.2023',
      '08.07.2023',
      '09.07.2023',
      '10.07.2023',
      '11.07.2023',
      '12.07.2023',
      '13.07.2023',
      '14.07.2023',
      '15.07.2023',
      '16.07.2023',
      '17.07.2023',
      '18.07.2023',
      '19.07.2023',
      '20.07.2023',
      '21.07.2023',
      '22.07.2023',
      '23.07.2023',
      '24.07.2023',
      '25.07.2023',
      '26.07.2023',
      '27.07.2023',
      '28.07.2023',
      '29.07.2023',
      '30.07.2023',
      '31.07.2023',
      '01.08.2023',
      '02.08.2023',
      '03.08.2023',
      '04.08.2023',
      '05.08.2023',
      '06.08.2023',
      '07.08.2023',
      '08.08.2023',
      '09.08.2023',
      '10.08.2023',
      '11.08.2023',
      '12.08.2023',
      '13.08.2023',
      '14.08.2023',
      '15.08.2023',
      '16.08.2023',
      '17.08.2023',
      '18.08.2023',
      '19.08.2023',
      '20.08.2023',
      '21.08.2023',
      '22.08.2023',
      '23.08.2023',
      '24.08.2023',
      '25.08.2023',
      '26.08.2023',
      '27.08.2023',
      '28.08.2023',
      '29.08.2023',
      '30.08.2023',
      '31.08.2023',
      '01.09.2023',
      '02.09.2023'
    ],
    amounts: [
      23423.3, 23623.7, 23214.5, 23447.6, 23344.4, 23387.7, 24234.1, 23912.0, 24209.9, 24873.5,
      24440.8, 24882.9, 24997.3, 25205.7, 24240.8, 24423.5, 23578.0, 23202.3, 21357.4, 21692.4,
      21517.4, 21661.0, 21832.3, 21801.2, 21815.3, 20343.6, 20150.8, 20394.5, 20558.2, 20469.1,
      20202.7, 20428.2, 20043.8, 20017.8, 20042.9, 20169.3, 19445.9, 19444.7, 21545.7, 21790.6,
      21836.4, 22465.4, 22702.5, 20503.7, 20321.4, 19883.0, 20178.6, 20113.9, 19666.6, 19626.3,
      19758.4, 19490.9, 19477.3, 19310.6, 19125.1, 19304.8, 20361.2, 19757.8, 19631.5, 20174.9,
      19480.3, 19389.9, 19676.0, 20436.1, 20353.8, 20436.7, 20051.4, 19612.2, 19552.1, 19520.7,
      19261.3, 19212.6, 19494.4, 19933.9, 19218.7, 19411.9, 19663.5, 19692.9, 19358.6, 19334.5,
      19245.5, 19249.9, 19680.9, 19588.6, 20406.9, 20981.5, 20867.9, 20744.0, 21038.1, 20922.3,
      20822.4, 20676.6, 20778.3, 20384.5, 21281.9, 21464.7, 21360.4, 21055.4, 20667.5, 18583.8,
      18138.2, 17679.4, 17100.8, 16946.5, 17158.4, 17112.0, 16993.4, 16739.7, 16846.3, 16814.9,
      16749.3, 16287.9, 16274.6, 16677.6, 16785.6, 16611.8, 16686.3, 16595.4, 16481.4, 16531.4,
      17215.5, 17244.7, 17096.2, 17132.6, 17198.1, 17395.2, 17101.1, 17126.7, 17294.2, 17288.6,
      17220.5, 17262.9, 17232.5, 17951.6, 18351.8, 17846.1, 17518.5, 16794.4, 16825.7, 16809.5,
      17031.3, 16919.4, 16862.2, 16910.7, 16855.8, 16852.9, 16936.1, 16964.0, 16781.1, 16659.1,
      16644.4, 16635.9, 16621.9, 16766.9, 16773.2, 16976.5, 16877.9, 17012.3, 16979.6, 17119.0,
      17390.8, 17491.0, 17989.8, 19055.3, 19981.6, 21185.6, 21032.2, 21416.8, 21506.4, 21584.1,
      21169.4, 22718.5, 23304.5, 23068.7, 23161.8, 23156.1, 23779.0, 23259.5, 23480.3, 23182.3,
      23952.9, 23794.0, 23262.9, 23784.5, 24207.2, 23694.1, 23571.8, 23423.4, 23130.6, 23338.8,
      23425.1, 23003.6, 21933.6, 21902.9, 22080.7, 21887.5, 22308.6, 24330.9, 25233.8, 24984.7,
      24838.9, 25175.2, 25085.4, 25236.8, 24474.3, 24590.4, 24123.4, 23215.3, 23671.8, 23876.2,
      23595.0, 23914.1, 23780.5, 23473.4, 22403.7, 22636.7, 22595.4, 22535.1, 22274.3, 21826.5,
      20362.6, 20669.5, 22028.6, 24406.2, 26365.9, 25108.9, 25139.0, 27742.2, 27659.1, 28347.3,
      28457.8, 28437.8, 28760.3, 28734.1, 28374.5, 27761.9, 28153.7, 28023.3, 27465.0, 28627.4,
      29160.4, 28646.3, 28795.1, 28522.8, 28458.4, 28429.1, 28744.4, 28173.5, 28102.5, 28153.1,
      28522.7, 29755.4, 30484.6, 30473.0, 30524.1, 30964.9, 30586.5, 30545.3, 30312.2, 30470.1,
      30408.4, 29082.1, 28353.4, 27872.0, 27815.0, 27978.8, 28375.6, 29995.7, 29859.8, 29587.2,
      29425.5, 29941.3, 29329.6, 28877.4, 29244.7, 29352.7, 29653.9, 29816.4, 29122.0, 28627.8,
      27816.0, 28311.7, 27607.4, 27044.0, 27011.9, 27176.1, 27651.7, 27295.3, 27465.3, 27467.0,
      27154.7, 27147.2, 27257.1, 27048.9, 27448.1, 27220.7, 26589.2, 26911.6, 26882.9, 28181.9,
      28431.2, 28033.6, 27825.0, 27340.9, 27299.4, 27317.5, 27410.2, 27125.5, 27325.2, 27342.0,
      26784.4, 26773.9, 26525.1, 26190.1, 26080.7, 26428.9, 26051.7, 25732.8, 26472.8, 26767.3,
      26679.3, 27029.7, 28393.0, 30769.5, 30497.8, 31395.4, 30795.3, 31040.2, 30645.9, 30993.7,
      30703.4, 30823.1, 31275.5, 30649.9, 30769.0, 31377.0, 31326.5, 30875.6, 31463.6, 30442.0,
      30379.9, 30425.5, 31019.6, 30782.2, 30951.3, 31764.5, 31602.6, 30395.4, 30435.0, 30335.9,
      30242.4, 30185.5, 30408.0, 30058.9, 29988.0, 30337.0, 30098.2, 29365.4, 29681.8, 29568.8,
      29533.0, 29400.1, 29446.6, 29502.3, 29712.2, 30025.9, 29409.8, 29319.1, 29139.3, 29198.9,
      29270.2, 30168.6, 30104.0, 29719.4, 29544.9, 29480.8, 29468.5, 29689.0, 29472.0, 29251.1,
      28771.8, 26801.9, 26262.2, 26269.1, 26220.9, 26138.8, 26807.7, 26560.5, 26265.7, 26114.1,
      26176.8, 26215.7, 28046.0, 27757.3, 27464.5, 26144.9, 25859.0
    ]
  })

  return {
    stocksNames,
    bitcoin
  }
})
