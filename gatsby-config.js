module.exports = {
	siteMetadata: {
		title: `Kekker Documentation`,
		author: `Kekker`,
		bio: ``,
		description: `Documentation for new Kekker Platform`,
		social: {
			twitter: ``
		},
		siteUrl: `http://localhost:9000`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/posts`,
				name: `blogPosts`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					`gatsby-remark-prismjs`,
					`gatsby-remark-smartypants`,
					`gatsby-remark-copy-linked-files`,
					{
						resolve: `gatsby-remark-social-cards`,
						options: {
							title: {
								field: 'title',
								font: 'DejaVuSansCondensed',
								color: 'black', // black|white
								size: 48, // 16|24|32|48|64
								style: 'bold', // normal|bold|italic
								x: null, // Will default to xMargin
								y: null // Will default to yMargin
							},
							meta: {
								parts: [ '- ', { field: 'author' }, ' » ', { field: 'date', format: 'mmmm dS' } ],
								font: 'DejaVuSansCondensed',
								color: 'black', // black|white
								size: 24, // 16|24|32|48|64
								style: 'normal', // normal|bold|italic
								x: null, // Will default to xMargin
								y: null // Will default to cardHeight - yMargin - size
							},
							background: '#FFFFFF', // Background color for the card
							xMargin: 24, // Edge margin used when x value is not set
							yMargin: 24, // Edge margin used when y value is not set
							authorName: 'Kekker'
						}
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Kekker Documentation`,
				short_name: `Kekker`,
				start_url: `/`,
				background_color: `#f7f0eb`,
				theme_color: `#a2466c`,
				display: `standalone`,
				icon: `content/assets/cheese-icon.png`
			}
		},
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-sitemap`
	]
};
