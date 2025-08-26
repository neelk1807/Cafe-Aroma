import { getApps, initializeApp, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let adminApp: App;

if (!getApps().length) {
  adminApp = initializeApp({
    credential: cert({
      projectId: "chatapp-dc100",
      clientEmail: "firebase-adminsdk-fbsvc@chatapp-dc100.iam.gserviceaccount.com",
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC+EUNYrN83l/h5\n1ZOIjcTKFaka8z+uyTLSKX2NjGRzjZUm6SW2ZeBEK3ymM8G1AmtvjxuQJ2PGCXPd\n7RKQChq1g6YBAK8JV4Krrm1IqwfcLjz3iRbwmgk2hXXXT7/9//NqhZ4ISkuodBAG\nBm1fn+57TarhFEZz9w0508N/TI3KLwr1XKSeJaDaS9auJBDH2DpHFWuzDCCscxjg\nEeIxyNZtZsfF+w/t1nzOHS58851AxOs4NQGpn1rsqkkPCIL4HZ2qoCd/pulPvXVa\n2tgmd83y9SzhAp+wGM4qVLRfH/0U6wCgFgd9ZYugpeUCMVbyjIO0qmwVUms15tCD\nXeAmiJD9AgMBAAECggEAGStDDk6SHpQGyOdx6n7PhO06YAG/OJ+XFcJ9yE1DjhO9\nIRJ1toImIRDbKE0pRRWFcZfzT/MPYM2mpMg8kYts/wVoabCT/Toz6RUnjpxrZYpP\n832ZZpIXTzt8H9+FLpcCvmPkSffArhV0e7/FIwkUNQrTaovbSob4HuS+ejCChDfc\n+uF8NOtt4V9GdMZfmSxNGMJrv2r/WfDbfqOuR6kLEoqiaXkVxTqKUMnN6YqvbINN\nXuqWko0JMofMP6YJA/69RzTSGR6sP6AiXgICZBBo6pFPfU81COD1AypsHE1C88cN\nATs7XO72awpevt1oU+ryuLiFUu1MZQMQK2Mb74FwBwKBgQDs/L9XjvzOdzSkjPF6\nFEcLL859csxV4bX3Lnd8tjY4rVt0v0NqMsOe/8WnMus255qduYudTTdHMLClEdwk\n5U2bVZU8YlrkNohnjsLsgZai07aZsgDpnd5WF0k9ehJg6oasH85Fa0RTtN3QWM/S\nm8oohJ7eszFzUxsjVRo3OhtqrwKBgQDNUN/CAfC1Gepv+Jz2ftPMMkwBD5HoO6MO\nn49Otvy+arq4znqq3nKWNEi6rfhD6wbwFRL7KpS3G6cU6Nr97FqoQtbf6Cmojcmb\nYmPs8JewZUBuf8RUgOBXLifRnBuhAIx0O5n/CeeoOHQe1OLgJHTnlE1kEpka3JKf\nJBvT6ew6EwKBgBf+IrUPoeKZSPgb2Nq+MM8eIO6sb6mGN3D2AFzc6bJlQqwYLRAU\nYZ+4T191FUEyw4GSZmMfjSgk8s1TeJE3sdq3GGvLnV4bc0XguzVMjV6gxoza66K7\nO+ZFZ0HVGQU82TOV6ME4cetzlT1hsHCnGxltC9SKGciOMmIqXIQY2uu7AoGAHbfN\nC3nYa346zsY/gfZNlcrZ8XVdey3WpjE2PwCBiNZN/J32Z3EXSOJ8fHjd7IbCVFHY\nk35QVEiuYHpr6EEjxiMWkwY5sWoEenc9W3hfnGqrbtMTid+1mSjXHqHn5d/8dH6E\nBcRbQaAaPrQ1upfMTBDNOuTuQFMY7ev+EyhSxv0CgYA70oB62LpsRLR8QEyGyZe3\n38h/tRabuxEjjbVv3nBnWIreVKd6LX6bMpazES4NnWunhq9JpEEEYCAT80F0gkTg\nLgM9g3BXCgqPziWW1PZJCIjoLsk7hHkh8lgNEFqyFelTZ/Hfqv8NPyiIfTWyPT72\nb2MAv26OEqey63FcqZ5l6A==\n-----END PRIVATE KEY-----\n",
    }),
  });
} else {
  adminApp = getApps()[0]!;
}

export const adminAuth = getAuth(adminApp);
