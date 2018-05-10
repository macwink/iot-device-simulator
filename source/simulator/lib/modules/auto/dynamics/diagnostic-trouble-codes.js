/*********************************************************************************************************************
 *  Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance        *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://aws.amazon.com/asl/                                                                                    *
 *                                                                                                                    *
 *  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

/**
 * @author Solution Builders
 */
'use strict';

let diagnostic_trouble_codes = ["P0100", "P0101", "P0102", "P0103", "P0104", "P0105", "P0106", "P0107", "P0108", "P0109",
    "P0110", "P0111", "P0112", "P0113", "P0114", "P0115", "P0116", "P0117", "P0118", "P0119", "P0120", "P0121", "P0122",
    "P0123", "P0124", "P0125", "P0126", "P0128", "P0130", "P0131", "P0132", "P0133", "P0134", "P0135", "P0136", "P0137",
    "P0138", "P0139", "P0140", "P0141", "P0142", "P0143", "P0144", "P0145", "P0146", "P0147", "P0150", "P0151", "P0152",
    "P0153", "P0154", "P0155", "P0156", "P0157", "P0158", "P0159", "P0160", "P0161", "P0162", "P0163", "P0164", "P0165",
    "P0166", "P0167", "P0170", "P0171", "P0172", "P0173", "P0174", "P0175", "P0176", "P0177", "P0178", "P0179", "P0180",
    "P0181", "P0182", "P0183", "P0184", "P0185", "P0186", "P0187", "P0188", "P0189", "P0190", "P0191", "P0192", "P0193",
    "P0194", "P0195", "P0196", "P0197", "P0198", "P0199", "P0200", "P0201", "P0202", "P0203", "P0204", "P0205", "P0206",
    "P0207", "P0208", "P0209", "P0210", "P0211", "P0212", "P0213", "P0214", "P0215", "P0216", "P0217", "P0218", "P0219",
    "P0220", "P0221", "P0222", "P0223", "P0224", "P0225", "P0226", "P0227", "P0228", "P0229", "P0230", "P0231", "P0232",
    "P0233", "P0234", "P0235", "P0236", "P0237", "P0238", "P0239", "P0240", "P0241", "P0242", "P0243", "P0244", "P0245",
    "P0246", "P0247", "P0248", "P0249", "P0250", "P0251", "P0252", "P0253", "P0254", "P0255", "P0256", "P0257", "P0258",
    "P0259", "P0260", "P0261", "P0262", "P0263", "P0264", "P0265", "P0266", "P0267", "P0268", "P0269", "P0270", "P0271",
    "P0272", "P0273", "P0274", "P0275", "P0276", "P0277", "P0278", "P0279", "P0280", "P0281", "P0282", "P0283", "P0284",
    "P0285", "P0286", "P0287", "P0288", "P0289", "P0290", "P0291", "P0292", "P0293", "P0294", "P0295", "P0296", "P0300",
    "P0301", "P0302", "P0303", "P0304", "P0305", "P0306", "P0307", "P0308", "P0309", "P0310", "P0311", "P0312", "P0320",
    "P0321", "P0322", "P0323", "P0325", "P0326", "P0327", "P0328", "P0329", "P0330", "P0331", "P0332", "P0333", "P0334",
    "P0335", "P0336", "P0337", "P0338", "P0339", "P0340", "P0341", "P0342", "P0343", "P0344", "P0350", "P0351", "P0352",
    "P0353", "P0354", "P0355", "P0356", "P0357", "P0358", "P0359", "P0360", "P0361", "P0362", "P0370", "P0371", "P0372",
    "P0373", "P0374", "P0375", "P0376", "P0377", "P0378", "P0379", "P0380", "P0381", "P0382", "P0385", "P0386", "P0387",
    "P0388", "P0389", "P0400", "P0401", "P0402", "P0403", "P0404", "P0405", "P0406", "P0407", "P0408", "P0410", "P0411",
    "P0412", "P0413", "P0414", "P0415", "P0416", "P0417", "P0418", "P0419", "P0420", "P0421", "P0422", "P0423", "P0424",
    "P0426", "P0427", "P0428", "P0430", "P0431", "P0432", "P0433", "P0434", "P0436", "P0437", "P0438", "P0440", "P0441",
    "P0442", "P0443", "P0444", "P0445", "P0446", "P0447", "P0448", "P0449", "P0450", "P0451", "P0452", "P0453", "P0454",
    "P0455", "P0460", "P0461", "P0462", "P0463", "P0464", "P0465", "P0466", "P0467", "P0468", "P0469", "P0470", "P0471",
    "P0472", "P0473", "P0474", "P0475", "P0476", "P0477", "P0478", "P0479", "P0480", "P0481", "P0482", "P0483", "P0484",
    "P0485", "P0500", "P0501", "P0502", "P0503", "P0505", "P0506", "P0507", "P0510", "P0520", "P0521", "P0522", "P0523",
    "P0530", "P0531", "P0532", "P0533", "P0534", "P0550", "P0551", "P0552", "P0553", "P0554", "P0560", "P0561", "P0562",
    "P0563", "P0565", "P0566", "P0567", "P0568", "P0569", "P0570", "P0571", "P0572", "P0573", "P0574", "P0575", "P0576",
    "P0578", "P0579", "P0580", "P0600", "P0601", "P0602", "P0603", "P0604", "P0605", "P0606", "P0608", "P0609", "P0620",
    "P0621", "P0622", "P0650", "P0654", "P0655", "P0656", "P0700", "P0701", "P0702", "P0703", "P0704", "P0705", "P0706",
    "P0707", "P0708", "P0709", "P0710", "P0711", "P0712", "P0713", "P0714", "P0715", "P0716", "P0717", "P0718", "P0719",
    "P0720", "P0721", "P0722", "P0723", "P0724", "P0725", "P0726", "P0727", "P0728", "P0730", "P0731", "P0732", "P0733",
    "P0734", "P0735", "P0736", "P0740", "P0741", "P0742", "P0743", "P0744", "P0745", "P0746", "P0747", "P0748", "P0749",
    "P0750", "P0751", "P0752", "P0753", "P0754", "P0755", "P0756", "P0757", "P0758", "P0759", "P0760", "P0761", "P0762",
    "P0763", "P0764", "P0765", "P0766", "P0767", "P0768", "P0769", "P0770", "P0771", "P0772", "P0773", "P0774", "P0775",
    "P0776", "P0777", "P0778", "P0779", "P0780", "P0781", "P0782", "P0783", "P0784", "P0785", "P0786", "P0787", "P0788",
    "P0789", "P0790", "P0801", "P0803", "P0804", "P1100", "P1101", "P1102", "P1103", "P1104", "P1105", "P1106", "P1107",
    "P1108", "P1109", "P1110", "P1111", "P1112", "P1113", "P1114", "P1115", "P1116", "P1117", "P1118", "P1119", "P1120",
    "P1121", "P1122", "P1123", "P1124", "P1125", "P1126", "P1127", "P1128", "P1129", "P1130", "P1131", "P1132", "P1133",
    "P1134", "P1135", "P1136", "P1137", "P1138", "P1139", "P1140", "P1141", "P1142", "P1143", "P1144", "P1150", "P1151",
    "P1152", "P1153", "P1154", "P1155", "P1156", "P1157", "P1158", "P1159", "P1167", "P1168", "P1169", "P1170", "P1171",
    "P1172", "P1173", "P1174", "P1175", "P1176", "P1177", "P1178", "P1180", "P1181", "P1182", "P1183", "P1184", "P1185",
    "P1186", "P1187", "P1188", "P1189", "P1190", "P1191", "P1192", "P1193", "P1194", "P1195", "P1196", "P1197", "P1198",
    "P1199", "P1200", "P1201", "P1202", "P1203", "P1204", "P1205", "P1206", "P1209", "P1210", "P1211", "P1212", "P1213",
    "P1214", "P1215", "P1216", "P1217", "P1218", "P1219", "P1220", "P1221", "P1222", "P1223", "P1224", "P1225", "P1226",
    "P1227", "P1228", "P1229", "P1230", "P1231", "P1232", "P1233", "P1234", "P1235", "P1236", "P1237", "P1238", "P1239",
    "P1240", "P1241", "P1242", "P1243", "P1244", "P1245", "P1246", "P1247", "P1248", "P1249", "P1250", "P1251", "P1252",
    "P1253", "P1254", "P1255", "P1256", "P1257", "P1258", "P1259", "P1260", "P1261", "P1262", "P1263", "P1264", "P1265",
    "P1266", "P1267", "P1268", "P1269", "P1270", "P1271", "P1272", "P1273", "P1274", "P1275", "P1276", "P1277", "P1278",
    "P1280", "P1281", "P1282", "P1283", "P1284", "P1285", "P1286", "P1287", "P1288", "P1289", "P1290", "P1291", "P1292",
    "P1293", "P1294", "P1295", "P1296", "P1297", "P1298", "P1299", "P1300", "P1301", "P1302", "P1303", "P1304", "P1305",
    "P1306", "P1307", "P1308", "P1309", "P1313", "P1314", "P1315", "P1316", "P1317", "P1336", "P1340", "P1341", "P1345",
    "P1346", "P1347", "P1348", "P1349", "P1350", "P1351", "P1352", "P1353", "P1354", "P1355", "P1360", "P1361", "P1362",
    "P1363", "P1364", "P1365", "P1366", "P1367", "P1368", "P1369", "P1370", "P1371", "P1372", "P1373", "P1374", "P1375",
    "P1376", "P1380", "P1381", "P1382", "P1383", "P1384", "P1385", "P1386", "P1387", "P1388", "P1389", "P1390", "P1391",
    "P1392", "P1393", "P1394", "P1395", "P1396", "P1397", "P1398", "P1399", "P1400", "P1401", "P1402", "P1403", "P1404",
    "P1405", "P1406", "P1407", "P1408", "P1409", "P1411", "P1413", "P1414", "P1415", "P1416", "P1417", "P1418", "P1419",
    "P1420", "P1421", "P1422", "P1423", "P1424", "P1425", "P1426", "P1427", "P1428", "P1429", "P1430", "P1433", "P1434",
    "P1435", "P1436", "P1437", "P1438", "P1439", "P1440", "P1441", "P1442", "P1443", "P1444", "P1445", "P1446", "P1447",
    "P1448", "P1449", "P1450", "P1451", "P1452", "P1453", "P1454", "P1455", "P1456", "P1457", "P1460", "P1461", "P1462",
    "P1463", "P1464", "P1465", "P1466", "P1467", "P1468", "P1469", "P1470", "P1471", "P1472", "P1473", "P1474", "P1475",
    "P1476", "P1477", "P1478", "P1479", "P1480", "P1481", "P1482", "P1483", "P1484", "P1485", "P1486", "P1487", "P1490",
    "P1491", "P1492", "P1493", "P1494", "P1495", "P1500", "P1501", "P1502", "P1503", "P1504", "P1505", "P1506", "P1507",
    "P1508", "P1509", "P1510", "P1511", "P1512", "P1513", "P1514", "P1515", "P1516", "P1517", "P1518", "P1519", "P1520",
    "P1521", "P1522", "P1523", "P1524", "P1525", "P1526", "P1527", "P1528", "P1529", "P1530", "P1531", "P1532", "P1533",
    "P1534", "P1535", "P1536", "P1537", "P1538", "P1539", "P1540", "P1549", "P1550", "P1565", "P1566", "P1567", "P1568",
    "P1571", "P1572", "P1573", "P1574", "P1575", "P1576", "P1577", "P1578", "P1579", "P1580", "P1581", "P1582", "P1583",
    "P1584", "P1585", "P1586", "P1587", "P1588", "P1589", "P1600", "P1601", "P1602", "P1603", "P1604", "P1605", "P1606",
    "P1607", "P1608", "P1609", "P1610", "P1611", "P1612", "P1613", "P1614", "P1615", "P1616", "P1617", "P1618", "P1619",
    "P1620", "P1621", "P1622", "P1623", "P1624", "P1625", "P1626", "P1627", "P1628", "P1629", "P1630", "P1631", "P1632",
    "P1633", "P1634", "P1635", "P1636", "P1637", "P1638", "P1639", "P1640", "P1641", "P1642", "P1643", "P1644", "P1645",
    "P1650", "P1651", "P1652", "P1653", "P1654", "P1655", "P1660", "P1661", "P1662", "P1663", "P1667", "P1668", "P1670",
    "P1680", "P1681", "P1682", "P1683", "P1684", "P1685", "P1686", "P1687", "P1688", "P1689", "P1690", "P1691", "P1692",
    "P1693", "P1694", "P1700", "P1701", "P1702", "P1703", "P1704", "P1705", "P1706", "P1707", "P1708", "P1709", "P1711",
    "P1712", "P1713", "P1714", "P1715", "P1716", "P1717", "P1718", "P1720", "P1721", "P1722", "P1723", "P1724", "P1725",
    "P1726", "P1727", "P1728", "P1729", "P1730", "P1731", "P1732", "P1733", "P1734", "P1735", "P1736", "P1737", "P1738",
    "P1739", "P1740", "P1741", "P1742", "P1743", "P1744", "P1745", "P1746", "P1747", "P1748", "P1749", "P1751", "P1754",
    "P1755", "P1756", "P1760", "P1761", "P1762", "P1765", "P1767", "P1768", "P1769", "P1770", "P1775", "P1776", "P1777",
    "P1778", "P1779", "P1780", "P1781", "P1782", "P1783", "P1784", "P1785", "P1786", "P1787", "P1788", "P1789", "P1790",
    "P1791", "P1792", "P1793", "P1794", "P1795", "P1796", "P1797", "P1798", "P1799", "P1800", "P1801", "P1802", "P1803",
    "P1804", "P1805", "P1806", "P1807", "P1808", "P1809", "P1810", "P1811", "P1812", "P1813", "P1814", "P1815", "P1816",
    "P1817", "P1818", "P1819", "P1820", "P1821", "P1822", "P1823", "P1824", "P1825", "P1826", "P1827", "P1828", "P1829",
    "P1830", "P1831", "P1832", "P1833", "P1834", "P1835", "P1836", "P1837", "P1838", "P1839", "P1840", "P1841", "P1842",
    "P1843", "P1844", "P1845", "P1846", "P1847", "P1848", "P1849", "P1850", "P1867", "P1868", "P1869", "P1870", "P1871",
    "P1872", "P1873", "P1874", "P1875", "P1876", "P1877", "P1878", "P1879", "P1880", "P1881", "P1882", "P1883", "P1884",
    "P1885", "P1886", "P1890", "P1891", "P1900", "P1901", "P1902", "P1903", "P1904", "P1905", "P1906", "P1907", "P1908",
    "P1909", "P1910", "P1911", "P1912", "P1913", "P1914", "P1915", "P1916", "P1917", "P1918", "B1200", "B1201", "B1202",
    "B1203", "B1204", "B1205", "B1206", "B1207", "B1208", "B1209", "B1210", "B1211", "B1212", "B1213", "B1214", "B1215",
    "B1216", "B1217", "B1218", "B1219", "B1220", "B1222", "B1223", "B1224", "B1225", "B1226", "B1227", "B1228", "B1229",
    "B1231", "B1232", "B1233", "B1234", "B1235", "B1236", "B1237", "B1238", "B1239", "B1240", "B1241", "B1242", "B1243",
    "B1244", "B1245", "B1246", "B1247", "B1249", "B1250", "B1251", "B1252", "B1253", "B1254", "B1255", "B1256", "B1257",
    "B1258", "B1259", "B1260", "B1261", "B1262", "B1263", "B1264", "B1265", "B1266", "B1267", "B1268", "B1269", "B1270",
    "B1271", "B1272", "B1273", "B1274", "B1275", "B1276", "B1277", "B1278", "B1279", "B1280", "B1281", "B1282", "B1283",
    "B1284", "B1285", "B1286", "B1287", "B1288", "B1289", "B1290", "B1291", "B1292", "B1293", "B1294", "B1295", "B1296",
    "B1297", "B1298", "B1299", "B1300", "B1301", "B1302", "B1303", "B1304", "B1305", "B1306", "B1307", "B1308", "B1309",
    "B1310", "B1311", "B1312", "B1313", "B1314", "B1315", "B1316", "B1317", "B1318", "B1319", "B1320", "B1321", "B1322",
    "B1323", "B1324", "B1325", "B1326", "B1327", "B1328", "B1329", "B1330", "B1331", "B1332", "B1333", "B1334", "B1335",
    "B1336", "B1337", "B1338", "B1339", "B1340", "B1341", "B1342", "B1343", "B1344", "B1345", "B1346", "B1347", "B1348",
    "B1349", "B1350", "B1351", "B1352", "B1353", "B1354", "B1355", "B1356", "B1357", "B1358", "B1359", "B1360", "B1361",
    "B1362", "B1363", "B1364", "B1365", "B1366", "B1367", "B1368", "B1369", "B1370", "B1371", "B1372", "B1373", "B1374",
    "B1375", "B1376", "B1377", "B1378", "B1379", "B1380", "B1381", "B1382", "B1383", "B1384", "B1385", "B1386", "B1387",
    "B1388", "B1389", "B1390", "B1391", "B1392", "B1393", "B1394", "B1395", "B1396", "B1397", "B1398", "B1399", "B1400",
    "B1401", "B1402", "B1403", "B1404", "B1405", "B1406", "B1407", "B1408", "B1409", "B1410", "B1411", "B1412", "B1413",
    "B1414", "B1415", "B1416", "B1417", "B1418", "B1419", "B1420", "B1421", "B1422", "B1423", "B1424", "B1425", "B1426",
    "B1427", "B1428", "B1429", "B1430", "B1431", "B1432", "B1433", "B1434", "B1435", "B1436", "B1437", "B1438", "B1439",
    "B1440", "B1441", "B1442", "B1443", "B1444", "B1445", "B1446", "B1447", "B1448", "B1449", "B1450", "B1451", "B1452",
    "B1453", "B1454", "B1455", "B1456", "B1457", "B1458", "B1459", "B1460", "B1461", "B1462", "B1463", "B1464", "B1465",
    "B1466", "B1467", "B1468", "B1469", "B1470", "B1471", "B1472", "B1473", "B1474", "B1475", "B1476", "B1477", "B1478",
    "B1479", "B1480", "B1481", "B1482", "B1483", "B1484", "B1485", "B1486", "B1487", "B1488", "B1489", "B1490", "B1491",
    "B1492", "B1493", "B1494", "B1495", "B1496", "B1497", "B1498", "B1499", "B1500", "B1501", "B1502", "B1503", "B1504",
    "B1505", "B1506", "B1507", "B1508", "B1509", "B1510", "B1511", "B1512", "B1513", "B1514", "B1515", "B1516", "B1517",
    "B1518", "B1519", "B1520", "B1521", "B1522", "B1523", "B1524", "B1525", "B1526", "B1527", "B1528", "B1529", "B1530",
    "B1531", "B1532", "B1533", "B1534", "B1535", "B1536", "B1537", "B1538", "B1539", "B1540", "B1541", "B1542", "B1543",
    "B1544", "B1545", "B1546", "B1547", "B1548", "B1549", "B1550", "B1551", "B1552", "B1553", "B1554", "B1555", "B1556",
    "B1557", "B1558", "B1559", "B1560", "B1561", "B1562", "B1563", "B1564", "B1565", "B1566", "B1567", "B1568", "B1569",
    "B1570", "B1571", "B1572", "B1573", "B1574", "B1575", "B1576", "B1577", "B1578", "B1579", "B1580", "B1581", "B1582",
    "B1583", "B1584", "B1585", "B1586", "B1587", "B1588", "B1589", "B1590", "B1591", "B1592", "B1593", "B1594", "B1595",
    "B1596", "B1600", "B1601", "B1602", "B1603", "B1604", "B1605", "B1606", "B1607", "B1608", "B1609", "B1610", "B1611",
    "B1612", "B1613", "B1614", "B1615", "B1616", "B1617", "B1618", "B1619", "B1620", "B1621", "B1622", "B1623", "B1624",
    "B1625", "B1626", "B1627", "B1628", "B1629", "B1630", "B1631", "B1632", "B1633", "B1634", "B1635", "B1636", "B1637",
    "B1638", "B1639", "B1640", "B1641", "B1642", "B1643", "B1644", "B1645", "B1646", "B1647", "B1648", "B1649", "B1650",
    "B1651", "B1652", "B1653", "B1654", "B1655", "B1656", "B1657", "B1658", "B1659", "B1660", "B1661", "B1662", "B1663",
    "B1664", "B1665", "B1666", "B1667", "B1668", "B1669", "B1670", "B1671", "B1672", "B1673", "B1674", "B1675", "B1676",
    "B1677", "B1678", "B1679", "B1680", "B1681", "B1682", "B1683", "B1684", "B1685", "B1686", "B1687", "B1688", "B1689",
    "B1690", "B1691", "B1692", "B1693", "B1694", "B1695", "B1696", "B1697", "B1698", "B1701", "B1702", "B1703", "B1704",
    "B1705", "B1706", "B1707", "B1708", "B1709", "B1710", "B1711", "B1712", "B1713", "B1714", "B1715", "B1716", "B1717",
    "B1718", "B1719", "B1720", "B1721", "B1722", "B1723", "B1724", "B1725", "B1726", "B1727", "B1728", "B1729", "B1730",
    "B1731", "B1732", "B1733", "B1734", "B1735", "B1736", "B1737", "B1738", "B1739", "B1740", "B1741", "B1742", "B1743",
    "B1744", "B1745", "B1746", "B1747", "B1748", "B1749", "B1750", "B1751", "B1752", "B1753", "B1754", "B1755", "B1756",
    "B1757", "B1758", "B1759", "B1760", "B1761", "B1762", "B1763", "B1764", "B1765", "B1766", "B1767", "B1768", "B1769",
    "B1770", "B1771", "B1772", "B1773", "B1774", "B1775", "B1776", "B1778", "B1779", "B1780", "B1781", "B1782", "B1783",
    "B1784", "B1785", "B1786", "B1787", "B1788", "B1789", "B1790", "B1791", "B1792", "B1793", "B1794", "B1795", "B1796",
    "B1797", "B1798", "B1799", "B1800", "B1801", "B1802", "B1803", "B1804", "B1805", "B1806", "B1807", "B1808", "B1809",
    "B1810", "B1811", "B1812", "B1813", "B1814", "B1815", "B1816", "B1817", "B1818", "B1819", "B1820", "B1821", "B1822",
    "B1823", "B1824", "B1825", "B1826", "B1827", "B1828", "B1829", "B1830", "B1831", "B1832", "B1833", "B1834", "B1835",
    "B1836", "B1837", "B1838", "B1839", "B1840", "B1841", "B1842", "B1843", "B1844", "B1845", "B1846", "B1847", "B1848",
    "B1849", "B1850", "B1851", "B1852", "B1853", "B1854", "B1855", "B1856", "B1857", "B1858", "B1859", "B1860", "B1861",
    "B1862", "B1863", "B1864", "B1865", "B1866", "B1867", "B1868", "B1869", "B1870", "B1871", "B1872", "B1873", "B1874",
    "B1875", "B1876", "B1877", "B1878", "B1879", "B1880", "B1881", "B1882", "B1883", "B1884", "B1885", "B1886", "B1887",
    "B1888", "B1889", "B1890", "B1891", "B1892", "B1893", "B1894", "B1897", "B1898", "B1899", "B1900", "B1901", "B1902",
    "B1903", "B1904", "B1905", "B1906", "B1907", "B1908", "B1909", "B1910", "B1911", "B1912", "B1913", "B1914", "B1915",
    "B1916", "B1917", "B1918", "B1919", "B1920", "B1921", "B1922", "B1923", "B1924", "B1925", "B1926", "B1927", "B1928",
    "B1929", "B1930", "B1931", "B1932", "B1933", "B1934", "B1935", "B1936", "B1937", "B1938", "B1939", "B1941", "B1942",
    "B1943", "B1944", "B1945", "B1946", "B1947", "B1948", "B1949", "B1950", "B1951", "B1952", "B1953", "B1954", "B1955",
    "B1956", "B1957", "B1958", "B1959", "B1960", "B1961", "B1962", "B1963", "B1964", "B1965", "B1966", "B1967", "B1968",
    "B1969", "B1970", "B1971", "B1972", "B1973", "B1979", "B1980", "B1981", "B1984", "B1985", "B1987", "B1988", "B1989",
    "B1990", "B1991", "B1992", "B1993", "B1994", "B1995", "B1996", "B1997", "B1998", "B1999", "B2100", "B2101", "B2102",
    "B2103", "B2104", "B2105", "B2106", "B2107", "B2108", "B2109", "B2110", "B2111", "B2112", "B2113", "B2114", "B2115",
    "B2116", "B2117", "B2118", "B2119", "B2120", "B2122", "B2123", "B2124", "B2128", "B2129", "B2130", "B2131", "B2132",
    "B2133", "B2134", "B2135", "B2136", "B2139", "B2141", "B2142", "B2143", "B2144", "B2145", "B2146", "B2148", "B2149",
    "B2150", "B2151", "B2152", "B2153", "B2154", "B2155", "B2156", "B2157", "B2158", "B2159", "B2160", "B2161", "B2162",
    "B2163", "B2164", "B2165", "B2166", "B2167", "B2168", "B2169", "B2170", "B2172", "B2174", "B2175", "B2176", "B2177",
    "B2178", "B2179", "B2180", "B2181", "B2182", "B2183", "B2184", "B2185", "B2186", "B2187", "B2188", "B2190", "B2194",
    "B2195", "B2196", "B2197", "B2198", "B2199", "B2200", "B2201", "B2202", "B2203", "B2204", "B2205", "B2206", "B2207",
    "B2208", "B2209", "B2210", "B2211", "B2214", "B2215", "B2219", "B2220", "B2221", "B2222", "B2223", "B2224", "B2225",
    "B2226", "B2227", "B2228", "B2229", "B2230", "B2231", "B2232", "B2233", "B2234", "B2235", "B2236", "B2237", "B2238",
    "B2239", "B2240", "B2241", "B2242", "B2243", "B2244", "B2245", "B2246", "B2247", "B2248", "B2249", "B2250", "B2251",
    "B2252", "B2300", "B2301", "B2302", "B2303", "B2304", "B2305", "B2306", "B2310", "B2311", "B2312", "B2313", "B2314",
    "B2315", "B2316", "B2317", "B2318", "B2319", "B2320", "B2321", "B2322", "B2323", "B2324", "B2325", "B2326", "B2327",
    "B2328", "B2329", "B2330", "B2331", "B2332", "B2333", "B2334", "B2335", "B2336", "B2337", "B2338", "B2339", "B2340",
    "B2341", "B2342", "B2343", "B2344", "B2345", "B2346", "B2347", "B2348", "B2349", "B2350", "B2351", "B2352", "B2353",
    "B2354", "B2355", "B2357", "B2362", "B2363", "B2364", "B2365", "B2366", "B2367", "B2368", "B2369", "B2373", "B2374",
    "B2380", "B2381", "B2384", "B2385", "B2401", "B2402", "B2403", "B2404", "B2405", "B2406", "B2416", "B2425", "B2426",
    "B2427", "B2428", "B2429", "B2431", "B2432", "B2433", "B2434", "B2435", "B2436", "B2437", "B2438", "B2439", "B2440",
    "B2441", "B2442", "B2443", "B2444", "B2445", "B2446", "B2447", "B2448", "B2449", "B2450", "B2451", "B2452", "B2453",
    "B2454", "B2455", "B2456", "B2457", "B2458", "B2459", "B2460", "B2461", "B2462", "B2463", "B2464", "B2465", "B2466",
    "B2467", "B2468", "B2469", "B2470", "B2471", "B2472", "B2473", "B2474", "B2475", "B2476", "B2477", "B2478", "B2479",
    "B2480", "B2481", "B2482", "B2483", "B2484", "B2485", "B2487", "B2489", "B2490", "B2491", "B2492", "B2493", "B2494",
    "B2495", "B2496", "B2499", "B2500", "B2501", "B2502", "B2503", "B2504", "B2505", "B2506", "B2507", "B2508", "B2509",
    "B2510", "B2511", "B2512", "B2513", "B2514", "B2515", "B2516", "B2517", "B2518", "B2519", "B2520", "B2523", "B2524",
    "B2525", "B2526", "B2527", "B2528", "B2529", "B2530", "B2531", "B2532", "B2533", "B2534", "B2535", "B2536", "B2539",
    "B2540", "B2543", "B2544", "B2545", "B2546", "B2550", "B2553", "B2554", "B2555", "B2556", "B2557", "B2558", "B2559",
    "B2560", "B2561", "B2562", "B2563", "B2564", "B2565", "B2566", "B2567", "B2568", "B2569", "B2570", "B2571", "B2580",
    "B2581", "B2582", "B2583", "B2584", "B2585", "B2586", "B2587", "B2588", "B2589", "B2590", "B2591", "B2592", "B2593",
    "B2594", "B2595", "B2596", "B2597", "B2598", "B2599", "B2600", "B2601", "B2602", "B2603", "B2604", "B2605", "B2606",
    "C1091", "C1095", "C1096", "C1097", "C1098", "C1100", "C1101", "C1102", "C1103", "C1104", "C1105", "C1106", "C1107",
    "C1109", "C1110", "C1111", "C1112", "C1113", "C1114", "C1115", "C1116", "C1117", "C1123", "C1124", "C1125", "C1126",
    "C1127", "C1132", "C1133", "C1134", "C1135", "C1136", "C1137", "C1138", "C1139", "C1140", "C1141", "C1142", "C1143",
    "C1144", "C1145", "C1146", "C1148", "C1149", "C1150", "C1155", "C1156", "C1157", "C1158", "C1159", "C1161", "C1162",
    "C1163", "C1164", "C1165", "C1166", "C1167", "C1168", "C1169", "C1170", "C1172", "C1173", "C1174", "C1175", "C1176",
    "C1177", "C1178", "C1179", "C1180", "C1181", "C1182", "C1183", "C1184", "C1185", "C1186", "C1187", "C1188", "C1189",
    "C1190", "C1191", "C1192", "C1193", "C1194", "C1195", "C1196", "C1197", "C1198", "C1199", "C1200", "C1201", "C1202",
    "C1203", "C1204", "C1205", "C1206", "C1207", "C1208", "C1209", "C1210", "C1211", "C1212", "C1213", "C1214", "C1215",
    "C1216", "C1217", "C1218", "C1219", "C1220", "C1221", "C1222", "C1223", "C1224", "C1225", "C1226", "C1227", "C1228",
    "C1229", "C1230", "C1231", "C1232", "C1233", "C1234", "C1235", "C1236", "C1237", "C1238", "C1239", "C1240", "C1241",
    "C1242", "C1243", "C1244", "C1245", "C1246", "C1247", "C1248", "C1249", "C1250", "C1251", "C1252", "C1253", "C1254",
    "C1255", "C1256", "C1257", "C1258", "C1259", "C1260", "C1261", "C1262", "C1263", "C1264", "C1265", "C1266", "C1267",
    "C1268", "C1269", "C1270", "C1271", "C1272", "C1273", "C1274", "C1275", "C1276", "C1277", "C1278", "C1279", "C1280",
    "C1281", "C1282", "C1283", "C1284", "C1285", "C1286", "C1287", "C1288", "C1289", "C1400", "C1401", "C1402", "C1403",
    "C1404", "C1405", "C1406", "C1407", "C1410", "C1411", "C1412", "C1413", "C1414", "C1415", "C1416", "C1417", "C1418",
    "C1419", "C1420", "C1421", "C1422", "C1423", "C1424", "C1425", "C1426", "C1427", "C1428", "C1429", "C1430", "C1431",
    "C1432", "C1433", "C1435", "C1436", "C1437", "C1438", "C1439", "C1440", "C1441", "C1442", "C1443", "C1444", "C1445",
    "C1446", "C1447", "C1448", "C1449", "C1450", "C1451", "C1452", "C1453", "C1454", "C1455", "C1456", "C1457", "C1458",
    "C1459", "C1460", "C1461", "C1462", "C1463", "C1464", "C1465", "C1466", "C1467", "C1468", "C1469", "C1495", "C1496",
    "C1497", "C1498", "C1499", "C1500", "C1501", "C1502", "C1503", "C1504", "C1505", "C1506", "C1507", "C1508", "C1510",
    "C1511", "C1512", "C1513", "C1699", "C1700", "C1701", "C1702", "C1703", "C1704", "C1705", "C1706", "C1707", "C1708",
    "C1709", "C1710", "C1711", "C1712", "C1713", "C1714", "C1715", "C1716", "C1717", "C1718", "C1719", "C1721", "C1722",
    "C1723", "C1724", "C1725", "C1726", "C1727", "C1728", "C1729", "C1730", "C1731", "C1732", "C1733", "C1734", "C1735",
    "C1736", "C1737", "C1738", "C1739", "C1740", "C1741", "C1742", "C1743", "C1744", "C1745", "C1748", "C1749", "C1750",
    "C1751", "C1752", "C1753", "C1754", "C1755", "C1756", "C1757", "C1758", "C1759", "C1760", "C1761", "C1762", "C1763",
    "C1765", "C1766", "C1767", "C1768", "C1770", "C1771", "C1772", "C1773", "C1774", "C1775", "C1776", "C1777", "C1778",
    "C1779", "C1780", "C1781", "C1790", "C1791", "C1792", "C1793", "C1795", "C1796", "C1797", "C1798", "C1800", "C1805",
    "C1813", "C1814", "C1818", "C1819", "C1820", "C1830", "C1831", "C1832", "C1833", "C1834", "C1835", "C1836", "C1837",
    "C1838", "C1839", "C1840", "C1841", "C1842", "C1843", "C1844", "C1845", "C1846", "C1847", "C1848", "C1849", "C1850",
    "C1851", "C1852", "C1853", "C1854", "C1855", "C1856", "C1859", "C1860", "C1861", "C1862", "C1863", "C1864", "C1865",
    "C1866", "C1867", "C1868", "C1869", "C1870", "C1871", "C1872", "C1873", "C1874", "C1875", "C1876", "C1877", "C1878",
    "C1879", "C1880", "C1881", "C1882", "C1883", "C1884", "C1885", "C1886", "C1887", "C1888", "C1889", "C1890", "C1891",
    "C1892", "C1893", "C1894", "C1895", "C1896", "C1897", "C1898", "C1899", "C1900", "C1901", "C1902", "C1903", "C1904",
    "C1905", "C1906", "C1907", "C1908", "C1909", "C1910", "C1911", "C1912", "C1913", "C1914", "C1915", "C1916", "C1917",
    "C1918", "C1920", "C1921", "C1922", "C1923", "C1924", "C1925", "C1926", "C1927", "C1928", "C1929", "C1930", "C1931",
    "C1932", "C1933", "C1934", "C1935", "C1936", "C1937", "C1938", "C1939", "C1940", "C1942", "C1943", "C1944", "C1945",
    "C1946", "C1947", "C1948", "C1949", "C1950", "C1951", "C1952", "C1953", "C1954", "C1955", "C1956", "C1957", "C1958",
    "C1959", "C1960", "C1961", "C1962", "C1963", "C2767", "U1000", "U1001", "U1002", "U1003", "U1004", "U1005", "U1006",
    "U1007", "U1008", "U1009", "U1010", "U1011", "U1012", "U1013", "U1014", "U1015", "U1016", "U1017", "U1018", "U1019",
    "U1020", "U1021", "U1022", "U1023", "U1024", "U1025", "U1026", "U1027", "U1028", "U1029", "U1030", "U1031", "U1032",
    "U1033", "U1034", "U1035", "U1036", "U1037", "U1038", "U1039", "U1040", "U1041", "U1042", "U1043", "U1044", "U1045",
    "U1046", "U1047", "U1048", "U1049", "U1050", "U1051", "U1052", "U1053", "U1054", "U1055", "U1056", "U1057", "U1058",
    "U1059", "U1060", "U1061", "U1062", "U1063", "U1064", "U1065", "U1066", "U1067", "U1068", "U1069", "U1070", "U1071",
    "U1072", "U1073", "U1074", "U1075", "U1076", "U1077", "U1078", "U1079", "U1080", "U1081", "U1082", "U1083", "U1084",
    "U1085", "U1086", "U1087", "U1088", "U1089", "U1090", "U1091", "U1092", "U1093", "U1094", "U1095", "U1096", "U1097",
    "U1098", "U1099", "U1100", "U1101", "U1102", "U1103", "U1104", "U1105", "U1106", "U1107", "U1108", "U1109", "U1110",
    "U1111", "U1112", "U1113", "U1114", "U1115", "U1116", "U1117", "U1118", "U1119", "U1120", "U1121", "U1122", "U1123",
    "U1124", "U1125", "U1126", "U1127", "U1128", "U1129", "U1130", "U1131", "U1132", "U1133", "U1134", "U1135", "U1136",
    "U1137", "U1138", "U1139", "U1140", "U1141", "U1142", "U1143", "U1144", "U1145", "U1146", "U1147", "U1148", "U1149",
    "U1150", "U1151", "U1152", "U1153", "U1154", "U1155", "U1156", "U1157", "U1158", "U1159", "U1160", "U1161", "U1162",
    "U1163", "U1164", "U1165", "U1166", "U1167", "U1168", "U1169", "U1170", "U1171", "U1172", "U1173", "U1174", "U1175",
    "U1176", "U1177", "U1178", "U1179", "U1180", "U1181", "U1182", "U1183", "U1184", "U1185", "U1186", "U1187", "U1188",
    "U1189", "U1190", "U1191", "U1192", "U1193", "U1194", "U1195", "U1196", "U1197", "U1198", "U1199", "U1200", "U1201",
    "U1202", "U1203", "U1204", "U1205", "U1206", "U1207", "U1208", "U1209", "U1210", "U1211", "U1212", "U1213", "U1214",
    "U1215", "U1216", "U1217", "U1218", "U1219", "U1220", "U1221", "U1222", "U1223", "U1224", "U1225", "U1226", "U1227",
    "U1228", "U1229", "U1230", "U1231", "U1232", "U1233", "U1234", "U1235", "U1236", "U1237", "U1238", "U1239", "U1240",
    "U1241", "U1242", "U1243", "U1244", "U1245", "U1246", "U1247", "U1248", "U1249", "U1250", "U1251", "U1252", "U1253",
    "U1254", "U1255", "U1260", "U1261", "U1262", "U1308", "U1341", "U1430", "U1451", "U1612", "U1736", "U1750", "U1794",
    "U1797", "U1798", "U1806", "U1900", "U1950", "U2000", "U2001", "U2002", "U2003", "U2004", "U2005", "U2006", "U2007",
    "U2008", "U2009", "U2010", "U2011", "U2012", "U2013", "U2014", "U2015", "U2016", "U2017", "U2018", "U2019", "U2020",
    "U2021", "U2150", "U2152", "U2160", "U2195", "U2500"
]

module.exports = diagnostic_trouble_codes;
