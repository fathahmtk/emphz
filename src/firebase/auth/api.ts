'use client';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

export async function loginWithGoogle() {
  const auth = getAuth();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error('Error signing in with Google', error);
    throw error;
  }
}

export async function logout() {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out', error);
    throw error;
  }
}
