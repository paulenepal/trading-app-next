type ONBOARDING_TYPE = 'SIGN_IN' | 'SIGN_UP';

const ONBOARDING_REGEX = {
  // valid Email
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  // atleast 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$&+,:;=?@#|'<>.^*()%!-]).{8,}$/,
  // atleast 4 characters, only letters, numbers, and underscore
  USERNAME: /^[a-zA-Z0-9_]{4,}$/g,
  // must contain atleast 3 letters, retain Casing but allcaps is not allowed
  FIRSTNAME: /^[a-zA-Z]{3,}$/g,
  // must contain atleast 3 letters, retain Casing but allcaps is not allowed
  LASTNAME: /^[a-zA-Z]{3,}$/g,
}

// access as ONBOARDING_COPY.SIGN_IN.TITLE
const ONBOARDING_COPY = {
  SIGN_UP: {
    TITLE: "Sign up for an account",
    SUBTITLE: "Create an account to get started",
    BUTTON: "Sign Up",
    LINK: "Already have an account? Sign In"
  },
  SIGN_IN: {
    TITLE: "Sign in to your account",
    SUBTITLE: "Please sign in to continue.",
    BUTTON: "Sign In",
    LINK: "Don't have an account? Sign Up"
  }
}

type ONBOARDING_PROPS = {
  type: string;
}

type SIGN_IN_PROPS = {
  email: string;
  password: string;
}

type SIGN_UP_PROPS = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

interface SIGN_IN_INPUT {
  email: string;
  password: string;
}

interface SIGN_UP_INPUT extends SIGN_IN_INPUT {
  confirmpassword: string;
  username: string;
  firstName: string;
  lastName: string;
  birthDate: string;
}

export {
  ONBOARDING_REGEX,
  ONBOARDING_COPY
};

export type {
  ONBOARDING_TYPE,
  ONBOARDING_PROPS,
  SIGN_IN_PROPS,
  SIGN_UP_PROPS,
  SIGN_IN_INPUT,
  SIGN_UP_INPUT
};

export interface USER_INPUT {
  email: string
  first_name: string
  middle_name: string
  last_name: string
  username: string
  birthday: any
};