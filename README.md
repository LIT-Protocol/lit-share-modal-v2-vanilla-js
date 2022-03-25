<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Lit Access Control Conditions Modal Vanilla JS Wrapper](#lit-access-control-conditions-modal-vanilla-js-wrapper)
  - [Example](#example)
  - [How to use](#how-to-use)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Lit Access Control Conditions Modal Vanilla JS Wrapper

This is a wrapper around the Lit Access Control Conditions Modal React package, here: https://www.npmjs.com/package/lit-access-control-conditions-modal

The purpose is to let you use the Lit Access Control Conditional Modal in Vanilla JS, without having to use React.

## Example

Check out example.html to see a complete example

## How to use

You need to add 2 tags to the head section of your website:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/lit-access-control-conditions-modal-vanilla-js/dist/main.css"
/>
<script src="https://cdn.jsdelivr.net/npm/lit-access-control-conditions-modal-vanilla-js/dist/index.js"></script>
```

You also need to define functions that will be called when you want to show or close the modal. In this example, we have a button that will call showShareModal() when clicked.

```html
<script>
  function closeModal() {
    console.log("close share modal");
    ACCM.ReactContentRenderer.unmount(document.getElementById("shareModal"));
  }
  function openShareModal() {
    console.log("open share modal");
    ACCM.ReactContentRenderer.render(
      ACCM.ShareModal,
      // props to be passed to the ShareModal component.  These are documented here: https://github.com/LIT-Protocol/lit-access-control-conditions-modal#props
      {
        sharingItems: [],
        onAccessControlConditionsSelected: function (accessControlConditions) {
          console.log(
            "accessControlConditions from ShareModal: ",
            accessControlConditions
          );
          closeModal();
          // now, use the accessControlConditions to provision access using one of the methods below:
          // https://github.com/LIT-Protocol/lit-js-sdk#dynamic-content---provisoning-access-to-a-resource
          // or https://github.com/LIT-Protocol/lit-js-sdk#static-content---storing-any-static-content-and-manually-storing-the-metadata
        },
        onClose: closeModal,
        getSharingLink: function (sharingItem) {
          console.log("getSharingLink", sharingItem);
          return "";
        },
        showStep: "ableToAccess",
      },
      // target DOM node
      document.getElementById("shareModal")
    );
  }
</script>
```

In our HTML, we have a div that the modal is loaded into, and a button that calls openShareModal when clicked:

```html
<body>
  <div id="shareModal"></div>
  <button onclick="javascript:openShareModal()">Open Share Modal</button>
</body>
```

Once the user picks their access control conditions, the function passed in to `onAccessControlConditionsSelected` will be called with the accessControlConditions as a parameter. At this point, you should use the accessControlConditions variable to provision access using one of the methods below:

- Dynamic Content - Provisoning access to a resource: https://github.com/LIT-Protocol/lit-js-sdk#dynamic-content---provisoning-access-to-a-resource

- Or Static Content - Storing any static content and manually storing the metadata: https://github.com/LIT-Protocol/lit-js-sdk#static-content---storing-any-static-content-and-manually-storing-the-metadata
