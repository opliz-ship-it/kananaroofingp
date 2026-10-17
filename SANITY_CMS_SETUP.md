# 🛠️ Sanity CMS Setup Guide & Schema Configuration

This guide helps you (the developer) configure and deploy **Sanity Studio** so your client can manage project images and details directly via a secure web dashboard.

---

## 1. Local Sanity Studio Setup

If you don't have a Sanity Studio folder yet, you can create one by running this command in your terminal (outside the frontend directory, e.g., in your root developer folder):

```bash
npm create sanity@latest sanity-studio
```

During setup:
- Choose the **existing project** with ID: **`jvy33o8t`** (referenced in your [client.ts](file:///f:/Adobe%20Apps/student-(mohamed)/Work%20important/kananaroofing/src/client.ts))
- Choose the dataset **`production`**
- Choose **TypeScript** or **JavaScript** (whichever you prefer)
- Select the **Clean project** template

---

## 2. Define the Project Schema

In your Sanity Studio directory, create a new schema file `schemas/project.ts` (or `schemas/project.js`):

```typescript
// schemas/project.ts
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('English Title is required'),
    },
    {
      name: 'titleAr',
      title: 'Title (Arabic)',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('Arabic Title is required'),
    },
    {
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'descriptionAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true, // Allows client to crop and focus the image directly in the UI
      },
      validation: (Rule: any) => Rule.required().error('Image is required'),
    },
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'titleAr',
      media: 'image',
    },
  },
}
```

### Register the Schema
In your `schemas/index.ts` (or `schemaTypes/index.ts`) file, import and add the project schema to the array:

```typescript
import project from './project'

export const schemaTypes = [project]
```

---

## 3. Deploy Sanity Studio

Once configured, run the following command inside your `sanity-studio` directory to host the dashboard for free on Sanity's secure cloud:

```bash
npx sanity deploy
```

Choose a unique subdomain (e.g. `kananaroofing.sanity.studio`).
Your dashboard will now be live at `https://kananaroofing.sanity.studio`!

---

## 4. Invite Your Client to Manage Content

To allow your client to log in and upload pictures, you don't need to share your developer credentials. Follow these steps:

1. Log into your [Sanity Management Console](https://www.sanity.io/manage).
2. Select your project **`jvy33o8t`**.
3. Go to the **Members** tab.
4. Click **Invite Member**.
5. Enter your client's email address and assign them the **Editor** role (they will have access to add/edit/delete content but won't be able to change developer settings).
6. Your client will receive an email invitation to create their account and log into `https://kananaroofing.sanity.studio`.

---

## 5. Enable CORS for the Frontend

For the frontend website to fetch images correctly from Sanity, you need to whitelist your website domain (e.g., `localhost`, `vercel.app`, or your final domain):

1. Go to the **API** tab in the [Sanity Management Console](https://www.sanity.io/manage).
2. Scroll to the **CORS Origins** section.
3. Click **Add CORS Origin**.
4. Enter the URL of your site (e.g. `http://localhost:5173` for local development and `https://yourdomain.com` for production).
5. Ensure **Allow credentials** is checked.
