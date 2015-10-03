uses org.junit.Assert
uses org.junit.Test
uses org.mockito.Mockito

class TestMockito {

  @Test
  function runTheTest() {
    var orig = new Original()
    var mockedOriginal = Mockito.mock(Original)

    Mockito.when(mockedOriginal.testMe()).thenReturn("MockTested")

    Assert.assertEquals("tested", orig.testMe())
    Assert.assertEquals("MockTested", mockedOriginal.testMe())
  }

}

