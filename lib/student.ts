export const STUDENT_NAME_KEY = "english-fun-nama";
const STUDENT_NAME_EVENT = "english-fun-nama";

export function subscribeStudentName(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(STUDENT_NAME_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(STUDENT_NAME_EVENT, callback);
  };
}

export function getStudentName() {
  return typeof window === "undefined"
    ? ""
    : window.localStorage.getItem(STUDENT_NAME_KEY) ?? "";
}

export function saveStudentName(name: string) {
  const cleanedName = name.trim();
  if (!cleanedName) return;
  window.localStorage.setItem(STUDENT_NAME_KEY, cleanedName);
  window.dispatchEvent(new Event(STUDENT_NAME_EVENT));
}
