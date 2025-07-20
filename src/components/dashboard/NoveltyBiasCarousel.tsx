export function NoveltyBiasCarousel() {
    const dailyItems = useDailyNovelties(); // Hook personalizado
    
    return (
      <Carousel>
        {dailyItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <Badge variant="new">Nuevo hoy</Badge>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{item.content}</p>
              <UnlockBadge points={50} /> {/* Gamificación */}
            </CardContent>
          </Card>
        ))}
      </Carousel>
    );
  }