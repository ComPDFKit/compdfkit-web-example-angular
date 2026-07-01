# ComPDF SDK for Web (Angular Example)

As part of the KDAN ecosystem, [ComPDF SDK for Web](https://www.compdf.com/web?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) is a powerful JavaScript-based PDF library that enables developers to easily add PDF viewing, annotation, editing, and more to their applications across multiple frameworks including [Vanilla JavaScript](https://www.compdf.com/guides/pdf-sdk/web/make-a-program#integrate-into-a-vanilla-javascript-project?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), [Vue.js](https://www.compdf.com/guides/pdf-sdk/web/frameworks/vue?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), [React](https://www.compdf.com/guides/pdf-sdk/web/frameworks/react?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), [Angular](https://www.compdf.com/guides/pdf-sdk/web/frameworks/angular?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), [Next.js](https://www.compdf.com/guides/pdf-sdk/web/frameworks/nextjs?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), [Nuxt.js](https://www.compdf.com/guides/pdf-sdk/web/frameworks/nuxtjs?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), and more — with just a few lines of code.

> If you find this library helpful, please consider giving us a ⭐ **Star** on GitHub! Have feedback or questions? Join the conversation in our [Discussions](https://github.com/ComPDFKit/compdfkit-web-example-angular/discussions).

![webui](https://www.compdf.com/images/platform/web/webDemo@2x.png)

**Why ComPDF SDK?**

* **Easy to Integrate**: Clear docs and a powerful JavaScript API let you add PDF features in just a few lines of code.

* **Fully Customizable UI**: Ship your own look and feel with source-level control over every UI element.

* **Comprehensive PDF Features**: View, annotate, edit, convert, OCR, redact, sign, compress, compare, and more — all in one SDK.

* **5×24 Expert Support**: One-to-one technical assistance via email, phone, and on-site service.

## Table of Contents

- [Supported Features](#supported-features)
- [How to Make an Angular PDF Viewer App](#how-to-make-an-angular-pdf-viewer-app)
- [Free Trial and License](#free-trial-and-license)
- [Changelog](#changelog)
- [Support](#support)
- [Note](#note)
- [Related](#related)

## Supported Features

* **Viewer**: 
  
  - Fast and smooth PDF rendering and viewing
  * Display Modes - single/double page, vertical & horizontal scrolling, cover mode, crop mode
  * Text Search & Selection
  * PDF Navigation - outlines, bookmarks

* **Annotations**:
  
  * Notes - add longer comments with adjustable icon shape and color
  
  * Ink - freehand drawing with customizable color, opacity, line thickness
  
  * Text - add, move, resize text directly on page
  
  * Inspector - adjust annotation looks (line styles, borders, colors, opacity, font)
  
  * Comment on Annotations and Update Status
  
  * Import & Export & Flatten Annotations (XFDF, FDF, JSON)
  
  * Highlight, Underline, Strikeout, Squiggly
  
  * Shapes - Rectangle, Oval, Line, Arrow, Polygon, Polyline, Cloud
  
  * Stamps, Sound, Movie, File Attachment, Link, Distance, Perimeter, Area

* **Document Editor**: 
  
  - Page manipulation - insert, delete, rotate, reorder, extract, crop
  * Split PDF, Merge PDF

* **Content Editor**: Edit PDF text and images directly like in Word

* **Signatures**: 
  
  - Electronic Signatures - draw, type, image signatures
  * Digital Signatures - certificate-based signature validation

* **Forms**: 
  
  - Process fillable and static PDF forms
  * Form filling, form creation, form flattening

* **Security**: 
  
  - Encryption - set open password, permission password
  * Restrict printing, copying, editing

* **Redaction**: Permanently remove sensitive content from PDFs

* **Layers**: View, edit, display, lock, and export specific layers within a file

* **Color Separation**: Identify color models like CMYK, PMS. Toggle color visibility and view details.

* **Measurement**: Distance, area, perimeter measurement tools

* **Compare Documents**: Side-by-side document comparison to highlight differences

## How to Make an Angular PDF Viewer App

### Prerequisites

- The latest stable version of Node.js.
- A package manager compatible with npm (8.5.0 or later).
- Apply the License Key: Contact [ComPDFKit's sales team](https://www.compdf.com/contact-sales?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) to get a free 30-day license to test the project.

### Create a New Project

Create a new Angular project:

```bash
npm init @angular compdfkit-app
cd compdfkit-app
```

When prompted to make a choice, press **Enter** to accept the default options.

### Add ComPDF for Web

1. Install the webviewer package:

```bash
npm i @compdfkit_pdf_sdk/webviewer --save
```

2. Copy the static resource files to your project's assets folder:

```bash
cp -a ./node_modules/@compdfkit_pdf_sdk/webviewer/dist/. ./src/webviewer
```

3. Add the following to your `angular.json` file so Angular copies the assets before running your app:

```json
"assets": [
  "src/webviewer",
]
```

### Display a PDF

1. Add your PDF document to the `src/webviewer/example` directory.

2. Replace the contents of `src/app/app.component.html` with:

```html
<div #viewer class="viewer"></div>
```

3. Replace the contents of `src/app/app.component.ts` with:

```typescript
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import WebViewer from '@compdfkit_pdf_sdk/webviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  @ViewChild('viewer') viewer!: ElementRef;

  ngAfterViewInit(): void {
    let docViewer: any;
    WebViewer.init({
      path: '/',
      pdfUrl: '/webviewer/example/developer_guide_web.pdf',
      license: '<Input your license here>'
    }, this.viewer.nativeElement).then((instance: any) => {
      docViewer = instance.docViewer;

      docViewer.addEvent('documentloaded', async () => {
        console.log('document loaded');
      })
    })
  }
}
```

4. Add the following styles to `src/app/app.component.css`:

```css
.viewer { width: 100vw; height: 100vh; }
```

### Run the App

```bash
npm start
```

Open `http://localhost:4200` on your browser.

## Free Trial and License

Enter your provided license from our Team into the `<Input your license here>` section within `src/app/app.component.ts`.

ComPDF SDK for Web supports flexible licensing options. You can [apply for a license online](https://www.compdf.com/pricing?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) to use it, reducing the process of contacting the service team and saving you time. If you need more information, you can [contact our sales team](https://www.compdf.com/contact-sales?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular). Each license is valid only for the root domain name and any of its subdomains. 

> *The license we provide on Github can only run the demo. If you want to integrate our Web PDF SDK into your own Angular project, please [apply for a free trial license](https://www.compdf.com/pricing?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) on the website.*

Please note that it is not allowed to distribute any documents, sample code, or source code from the ComPDF SDK package to third parties.

## Changelog

Go to our [changelog](https://www.compdf.com/pdf-sdk/changelog-web?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) to keep up with the latest updates, improvements, and bug fixes.

## Support

ComPDF has a professional R&D team that produces comprehensive technical documentation and guides to help developers. Also, you can get an immediate response when reporting your problems to our support team.

- For detailed information, please visit our [Guides](https://www.compdf.com/guides/pdf-sdk/web/overview?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) page.

- For technical assistance, please reach out to our [Technical Support](https://www.compdf.com/support?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular).

- To get more details and an accurate quote, please contact our [Sales Team](https://compdf.com/contact-sales?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular).

## Note

We are glad to announce that you can register a ComPDF API account for a [free trial](https://api.compdf.com/api/pricing?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) to process 200+ API calls per month for free.

## Related

* Download [ComPDF SDK for Web](https://www.npmjs.com/package/@compdfkit_pdf_sdk/webviewer) in npm.

* [Online Demo of ComPDF SDK](https://www.compdf.com/webviewer/demo?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular)

* Integrate ComPDF SDK for Web into [Salesforce](https://www.compdf.com/pdf-sdk/salesforce?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), [SharePoint](https://www.compdf.com/pdf-sdk/sharepoint?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), [Microsoft Teams](https://www.compdf.com/contact-sales?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular), etc.

* [Build a Web PDF Viewer with Angular](https://www.compdf.com/blog/integrate-compdfkit-web-sdk-in-angular-app?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular)

* [ComPDF SDK for Web - Standalone Deployment](https://www.compdf.com/blog/compdfkit-standalone-deployment-for-web?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular)

* Experience seamless data extraction from PDFs with our online [Extraction Demo](https://www.compdf.com/data-extraction/demo?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular)

* Obtain [Intelligent Document Processing](https://www.compdf.com/solutions/intelligent-document-processing?utm_source=github_readme_web_example_angular&utm_medium=referral&utm_campaign=github_readme_web_example_angular) - customized one-stop solution.

