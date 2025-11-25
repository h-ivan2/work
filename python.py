def wgs84_to_utm35s(lat, lon ):
    transformer = transformer.from_crs(
        "EPSG:4326",
        "EPSG:32735",
        always_xy=True
    )
    easting, northing = transformer.transform(lon, lat)
    return easting, northing


    lat = -1.9532
    lon = 30.0914

    E, N = wgs84_to_utm35s(lat, lon)
    print("Easting:",E)

    print("Northing:",N) 