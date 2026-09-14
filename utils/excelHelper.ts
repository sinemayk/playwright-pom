import * as xlsx from "xlsx";

/**
 * Excel dosyasindan veri okuyup JSON formatina donusturen yardimci fonksiyon
 * @param filePath Okunacak olan dosya yolu (örn:"test-data/loginTestData.xlsx")
 * @returns Excelin okunan sayfasindaki satirlari JSON array olarak return eder
 */
export function getExcelData(filePath: string): any[]{
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];//adini aldik
    const sheet = workbook.Sheets[sheetName];//sayfayi aldik
    return xlsx.utils.sheet_to_json(sheet);
}