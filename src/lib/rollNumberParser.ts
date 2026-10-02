import { RollNumberMeta, BranchCode, BranchName } from '@/types';

/**
 * PVPSIT Roll Number Parser (PVP23 Regulation)
 * Prefix "24" -> Year 3 (Sem 5 / III-I, Completed Sem 1-4)
 * Prefix "25" -> Year 2 (Sem 3 / II-I, Completed Sem 1-2)
 * Prefix "26" -> Year 1 (Sem 1 / I-I, Completed Sem 0)
 * Branch Code "44" -> CSE (Data Science) - CSD
 * Branch Code "12" -> Information Technology - IT
 * College Code "501" -> PVPSIT
 */

export function validateInstitutionalEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const cleanEmail = email.trim().toLowerCase();
  return cleanEmail.endsWith('@pvpsiddhartha.ac.in');
}

export function parseRollNumber(rollNo: string): RollNumberMeta {
  const cleanInput = rollNo.trim().toUpperCase();

  // Pattern: 2 digits (Year), 3 digits (College), 2 alphanumeric (Degree), 2 digits (Branch), 2+ chars (Roll ID)
  // Example: 24501A4420 -> 24 | 501 | 1A | 44 | 20
  const regex = /^(\d{2})(\d{3})([A-Z0-9]{2})(\d{2})([A-Z0-9]{2,4})$/;
  const match = cleanInput.match(regex);

  let rawYear = '24';
  let collegeCode = '501';
  let degreeCode = '1A';
  let branchCode: BranchCode = '44';
  let studentId = '20';

  if (match) {
    [, rawYear, collegeCode, degreeCode, branchCode as any, studentId] = match;
  } else {
    // Attempt fallback heuristic
    if (cleanInput.length >= 2) {
      rawYear = cleanInput.substring(0, 2);
    }
    if (cleanInput.includes('12')) {
      branchCode = '12';
    } else {
      branchCode = '44';
    }
  }

  // Branch mapping
  const branchName: BranchName =
    branchCode === '12' ? 'Information Technology - IT' : 'CSE (Data Science) - CSD';

  // Year prefix mapping
  let yearStr = 'Year 3';
  let enrolledSemester = 'Sem 5 / III-I';
  let enrolledSemId = 5;
  let completedSemIds = [1, 2, 3, 4];
  let startYear = 2024;

  if (rawYear === '25') {
    yearStr = 'Year 2';
    enrolledSemester = 'Sem 3 / II-I';
    enrolledSemId = 3;
    completedSemIds = [1, 2];
    startYear = 2025;
  } else if (rawYear === '26') {
    yearStr = 'Year 1';
    enrolledSemester = 'Sem 1 / I-I';
    enrolledSemId = 1;
    completedSemIds = [];
    startYear = 2026;
  } else if (rawYear === '24') {
    yearStr = 'Year 3';
    enrolledSemester = 'Sem 5 / III-I';
    enrolledSemId = 5;
    completedSemIds = [1, 2, 3, 4];
    startYear = 2024;
  } else {
    const yNum = parseInt(rawYear, 10);
    if (!isNaN(yNum)) {
      startYear = 2000 + yNum;
    }
  }

  const isValid = match !== null || cleanInput.length >= 8;

  return {
    rawInput: cleanInput,
    year: yearStr,
    enrolledSemester,
    enrolledSemId,
    completedSemIds,
    batch: `${startYear} - ${startYear + 4}`,
    collegeCode: collegeCode || '501',
    degreeCode: degreeCode || '1A',
    degreeName: 'B.Tech',
    branchCode: (branchCode === '12' ? '12' : '44') as BranchCode,
    branchName,
    studentId: studentId || '01',
    isValid,
    errorMessage: isValid ? undefined : 'Format should match PVPSIT roll number e.g., 24501A4420 or 25501A1201',
  };
}

