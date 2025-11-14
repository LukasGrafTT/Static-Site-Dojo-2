# Static-Site-Dojo

## Scenario

Oh no! You only have 20 minutes to make a new website for your company's Training Catalog.

A software architect convinced your boss to try a Static Site Generator like [11ty](https://www.11ty.dev/docs/) (or another of your choice), so you will have to do that.

Luckily, much of the work is already being dealt with:

- Marketing exported their mock-ups as HTML Templates and Styling.
  - → You can adapt the HTML files as 11ty templates with few minor changes.
- Back-End has an API that returns a JSON array, and your colleague is working on Javascript files that handle fetching the data.
  - → You get data from the Javascript files in `_data`.
- You are allowed to make a public repository and use any web address.
  - → You can set up a GitHub Action as the pipeline and GitHub Pages as hosting.

## Hints

If you don't have a node.js setup on your computer, you can create a GitHub Codespace to work in your browser.

1. [initialize a node project with 11ty](https://www.11ty.dev/docs/#step-2-install-eleventy)
2. [convert the HTML files to page templates](https://www.11ty.dev/docs/#step-4-create-some-templates) and [to a layout template](https://www.11ty.dev/docs/layouts/)
3. [set up the pipeline in GitHub Actions](https://www.11ty.dev/docs/deployment/#deploy-an-eleventy-project-to-git-hub-pages)
   1. [You may need to enable the HtmlBase Plugin as well](https://www.11ty.dev/docs/plugins/html-base/)
4. [add the stylesheet as an asset](https://www.11ty.dev/docs/assets/)
5. [use pagination to create a separate page for each training](https://www.11ty.dev/docs/pagination/#paging-an-object)
