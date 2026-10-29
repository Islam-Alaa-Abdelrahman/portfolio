export function getProjectMedia(projectId: string) {
  switch (projectId) {
    case 'parkida':
      return [
        {
          src: '/projects/parkida/website.png',
          alt: 'Parkida marketing website introducing its parking-management mobile app with illustrative demo views',
          type: 'image' as const
        },
        {
          src: '/projects/parkida/workflow.png',
          alt: 'Parkida website walkthrough showing an illustrative vehicle check-in flow with synthetic demo data',
          type: 'image' as const
        }
      ];
    case 'civic-pm':
      return [{
        src: '/projects/civic-pm/homepage.png',
        alt: 'CIVIC construction project-management website homepage',
        type: 'image' as const
      }];
    case 'beauty-shop':
      return [
        {
          src: '/projects/beauty-shop/media/Screenshot_1.png',
          alt: 'Beauty Shop Screenshot 1',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_2.png',
          alt: 'Beauty Shop Screenshot 2',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_3.png',
          alt: 'Beauty Shop Screenshot 3',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_4.png',
          alt: 'Beauty Shop Screenshot 4',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_5.png',
          alt: 'Beauty Shop Screenshot 5',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_61.png',
          alt: 'Beauty Shop Screenshot 6',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_7.png',
          alt: 'Beauty Shop Screenshot 7',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_8.png',
          alt: 'Beauty Shop Screenshot 8',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_9.png',
          alt: 'Beauty Shop Screenshot 9',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_10.png',
          alt: 'Beauty Shop Screenshot 10',
          type: 'image' as const
        },
        {
          src: '/projects/beauty-shop/media/Screenshot_24.png',
          alt: 'Beauty Shop Screenshot 24',
          type: 'image' as const
        }
      ];
    default:
      return [];
  }
}
